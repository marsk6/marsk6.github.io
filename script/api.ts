import fse from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import rt from 'reading-time'
import { query } from '.keystone/api'

const postsDirectory = join(process.cwd(), '_posts')
export const pageSize = 2

/**
 * @description 获取文章文件名
 */
export async function getPostSlugs() {
  return await fse.readdir(postsDirectory)
}

export async function getPostBySlug(slug: string) {
  const post = await query.Post.findOne({
    where: { slug },
    query: 'slug title tags { name } category { name } ctime content prev next',
  })

  const item: Record<string, string> = {}
  item.ctime = post.ctime
  item.slug = post.slug
  item.content = post.content
  item.tags = post.tags
  item.readingTime = rt(post.content).text
  item.category = post.category = item.title = post.title
  item.prev = post.prev
  item.next = post.next
  return item
}

export async function getRelatedTag(tags: string[]) {
  const relatedTags = await query.Tag.findMany({
    where: { name: { in: tags } },
    query: 'name posts { slug }',
  })
  return relatedTags
}

export async function getAllPosts(options?: {
  pageNum: number
  pageSize: number
}) {
  const filter: Record<string, number> = {}
  if (options) {
    filter.take = options.pageSize
    filter.skip = (options.pageNum - 1) * options.pageSize
  }
  const posts = await query.Post.findMany({
    ...filter,
    orderBy: [{ ctime: 'desc' }],
    query: 'slug title tags { name } ctime',
  })
  return posts
}
// FIXME: 无法使用外层变量，https://github.com/vercel/next.js/issues/10933
export const common = {}

export async function getAllTags() {
  const tags = await query.Tag.findMany({
    query: 'name posts { title slug }',
  })
  return tags
}

export async function getCategories(posts: Post[]) {
  let categories = await cache.get('categories')
  if (categories) {
    return categories
  }
  categories = {}
  posts.forEach((post) => {
    if (!categories[post.category]) {
      categories[post.category] = []
    }
    categories[post.category].push({
      title: post.title,
      slug: post.slug,
    })
  })

  await cache.set('categories', categories)
  return categories
}

export async function getTotalPage() {
  const totalPage = await query.Post.count()
  return Math.ceil(totalPage / pageSize)
}
