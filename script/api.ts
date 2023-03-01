import fs from 'node:fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import rt from 'reading-time'
import { keystoneContext as context } from './context'

const query = context.query

const postsDirectory = join(process.cwd(), '_posts')
export const pageSize = 2

/**
 * @description 获取文章文件名
 */
export async function getPostSlugs() {
  return await fs.readdir(postsDirectory)
}

export async function getPostBySlug(slug: string) {
  const post = await query.Post.findOne({
    where: { slug },
    query:
      'slug title tags { name } category { name } ctime date content prev next',
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
  item.date = post.date
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
    query: 'slug title tags { name } ctime date brief',
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

export async function getCategories() {
  const _categories = await query.Category.findMany({
    query: 'name posts { title slug } postsCount',
  })
  const categories = _categories.map(({ name, posts }) => ({
    name,
    posts,
    count: posts.length,
  }))
  return categories
}

export async function getTotalPage() {
  const totalPage = await query.Post.count()
  return Math.ceil(totalPage / pageSize)
}
