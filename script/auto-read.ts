import { getContext } from '@keystone-6/core/context'
import fs from 'node:fs/promises'
import path from 'node:path'
import config from '../keystone'
import * as PrismaModule from '.prisma/client'
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
        const rawContent = await fs.readFile(filePath, { encoding: 'utf8' })
        await fs.rename(
          filePath,
          path.join(
            '/Users/kuncheng/Desktop/a/marsk-next-blog/_posts_archive',
            name
          )
        )
        const data = matter(rawContent)
        return {
          ...data.data,
          slug: name.split('.')[0],
          content: data.content,
          ctime: dayjs(stats.ctime).format('YYYY-MM-DD hh:mm:ss'),
          date: dayjs(stats.ctime).format('YYYY-MM-DD'),
        }
      }
    })
  )

  return files.flat()
}
async function main() {
  const files = await walk('/Users/kuncheng/Desktop/a/marsk-next-blog/_posts')
  const context = getContext(config, PrismaModule)
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
        if (existId.length) {
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
