import fse from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import rt from 'reading-time'

const postsDirectory = join(process.cwd(), '_posts')

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
  items.tags = data.tags || []
  items.readingTime = rt(content).text
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
  return posts
}

export function getAllTags(posts: Post[]) {
  let tags: string[] = []
  posts.forEach((post) => {
    tags = tags.concat(post.tags)
  })
  return [...new Set(tags)]
}
