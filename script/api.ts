import fse from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import rt from 'reading-time'
import cache from './cache'

const postsDirectory = join(process.cwd(), '_posts')
/**
 * @description 获取文章文件名
 */
export async function getPostSlugs() {
  return await fse.readdir(postsDirectory)
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const [fileContents, fileStat] = await Promise.all([
    fse.readFile(fullPath, 'utf8'),
    fse.stat(fullPath),
  ])
  const { data, content } = matter(fileContents)
  const items: Record<string, string> = {}
  items.ctime = dayjs(fileStat.ctime).format('YYYY-MM-DD')
  items.slug = realSlug
  items.content = content
  items.tags = data.tags || ['default']
  items.readingTime = rt(content).text
  items.category = data.category || 'default'
  items.title = data.title || 'default'
  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields))
  )
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  const [, categories] = await Promise.all([
    getAllTags(posts),
    getCategories(posts),
  ])
  posts.forEach((post) => {
    const sameCategoryList = categories[post.category]

    sameCategoryList.some((cur, index) => {
      if (cur.slug === post.slug) {
        post.prev = sameCategoryList[index - 1]
        post.next = sameCategoryList[index + 1]
        return true
      }
    })
  })

  return posts
}
// FIXME: 无法使用外层变量，https://github.com/vercel/next.js/issues/10933
export const common = {}

export async function getAllTags(posts: Post[]) {
  let tagCount = await cache.get('tagCount')
  if (tagCount) {
    return tagCount
  }
  tagCount = {}
  let tags: string[] = []
  posts.forEach((post) => {
    tags = tags.concat(post.tags)
  })
  tags.forEach((tag) => {
    if (!tagCount[tag]) {
      tagCount[tag] = 0
    }
    tagCount[tag] += 1
  })
  await cache.set('tagCount', tagCount)
  return tagCount
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
