import { keystoneContext as context } from './context'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import dayjs from 'dayjs'

async function walk(dir: string) {
  let filesInfo = await fs.readdir(dir)
  const files = await Promise.all(
    filesInfo.map(async (name) => {
      const filePath = path.join(dir, name)
      const stats = await fs.stat(filePath)
      if (stats.isDirectory()) {
        return walk(filePath)
      } else if (stats.isFile()) {
        if (path.extname(filePath) !== '.md') {
          return false
        }
        const rawContent = await fs.readFile(filePath, { encoding: 'utf8' })
        await fs.rename(
          filePath,
          path.resolve(__dirname, '../_posts_archive', name)
        )
        const data = matter(rawContent)
        return {
          ...data.data,
          slug: name.split('.')[0],
          content: data.content,
          ctime: '',
        }
      }
    })
  )

  return files.flat()
}
async function main() {
  let files = await walk(path.resolve(__dirname, '../_posts'))
  files = files.filter(Boolean)
  await Promise.all(
    files.map(async (file) => {
      const { tags, category } = file
      file.tags = {}
      file.category = {}
      for (let i = 0; i < tags.length; ++i) {
        const existId = await context.query.Tag.findMany({
          where: { name: { equals: tags[i] } },
          query: 'id',
        })
        if (existId.length === 1) {
          if (!file.tags.connect) {
            file.tags.connect = []
          }
          file.tags.connect.push({
            id: existId[0].id,
          })
        } else {
          if (!file.tags.create) {
            file.tags.create = []
          }
          file.tags.create.push({
            name: tags[i],
          })
        }
      }
      const existCategory = await context.query.Category.findMany({
        where: { name: { equals: category } },
        query: 'id',
      })
      if (existCategory.length) {
        file.category.connect = { id: existCategory[0].id }
      } else {
        file.category.create = { name: category }
      }
    })
  )
  context.query.Post.createMany({ data: files })
}

main()
