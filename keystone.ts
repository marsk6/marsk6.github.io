import { config, list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import {
  text,
  json,
  relationship,
  float,
  file,
  timestamp,
  checkbox,
} from '@keystone-6/core/fields'
import dayjs from 'dayjs'
import { Lists } from '.keystone/types'
import rt from 'reading-time'
import { preview } from './script/preview-field'
import path from 'node:path'
import fs from 'node:fs/promises'
import { createPosts } from './admin/api'

const Post: Lists.Post = list({
  fields: {
    slug: text({ isIndexed: 'unique' }),
    title: text({ defaultValue: 'default title' }),
    tags: relationship({
      // NOTE: 此时 grapql，tags 不是标量
      ref: 'Tag.posts',
      many: true,
      ui: { displayMode: 'select' },
    }),
    category: relationship({
      ref: 'Category.posts',
      many: false,
      ui: { displayMode: 'select' },
    }),
    attachment: relationship({
      ref: 'UploadPost.post',
      many: false,
      ui: {
        itemView: {
          fieldMode: 'hidden',
        },
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    ctime: float({
      defaultValue: 0,
    }),
    date: text({ defaultValue: '' }),
    readingTime: text({
      ui: {
        itemView: {
          fieldMode: 'hidden',
        },
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    prev: json({
      defaultValue: {},
      ui: {
        itemView: {
          fieldMode: 'hidden',
        },
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    next: json({
      defaultValue: {},
      ui: {
        itemView: {
          fieldMode: 'hidden',
        },
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    brief: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    content: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
  hooks: {
    resolveInput: async ({ operation, resolvedData, context }) => {
      if (operation === 'create' && resolvedData.ctime === 0) {
        resolvedData.ctime = Date.now()
        resolvedData.date = dayjs().format('MM-DD')
      }
      resolvedData.readingTime = `${Math.trunc(
        rt(resolvedData.content || '').minutes
      )}`
      return resolvedData
    },
    afterOperation: async ({ operation, item, context }) => {
      if (operation === 'create') {
        const { categoryId, ctime } = item
        if (!categoryId) return
        const list = await context.query.Post.findMany({
          where: {
            category: { id: { equals: categoryId } },
            ctime: { lte: ctime },
          },
          orderBy: { ctime: 'asc' },
          query: 'slug title',
        })
        if (list.length > 1) {
          const prev = list[list.length - 2]

          await context.query.Post.updateMany({
            data: [
              {
                where: { slug: prev.slug },
                data: { next: { slug: item.slug, title: item.title } },
              },
              {
                where: { slug: item.slug },
                data: { prev: { ...prev } },
              },
            ],
          })
        }
      }
    },
    beforeOperation: async ({ operation, item, context }) => {
      if (operation === 'delete') {
        const { prev, next, attachmentId } = item
        prev?.slug &&
          context.query.Post.updateOne({
            where: { slug: prev.slug },
            data: { next },
          })
        next?.slug &&
          context.query.Post.updateOne({
            where: { slug: next.slug },
            data: { prev },
          })
        context.query.UploadPost.deleteOne({
          where: { id: attachmentId },
          query: 'id',
        })
      }
    },
  },
  access: allowAll,
})

const Tag = list({
  fields: {
    name: text(),
    posts: relationship({
      ref: 'Post.tags',
      many: true,
      ui: { hideCreate: true },
    }),
  },
  access: allowAll,
})

const Category = list({
  fields: {
    name: text(),
    posts: relationship({
      ref: 'Post.category',
      many: true,
      ui: { hideCreate: true },
    }),
  },
  access: allowAll,
})

const UploadPost = list({
  fields: {
    isLive: checkbox({
      defaultValue: false,
      ui: {
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    uploadTime: text({
      defaultValue: 'default time',
      hooks: {
        resolveInput() {
          return Date.now().toString()
        },
      },
    }),
    /**
     * 1. nextjs 生成的是静态网站，不适合用来动态预览内容
     * 2. 准确是不能动态生成预览内容页面，但可以用一个静态页面获取动态的内容展示
     */
    attachment: file({
      storage: 'local_file_storage',
    }),
    preview: preview(),
    post: relationship({
      ref: 'Post.attachment',
      many: false,
      ui: {
        createView: {
          fieldMode: 'hidden',
        },
        itemView: {
          fieldMode: 'read',
        },
      },
    }),
  },
  hooks: {
    async resolveInput({ resolvedData }) {
      if (resolvedData.attachment.filename) {
        const filePath = path.join(
          process.cwd(),
          './_posts/',
          resolvedData.attachment.filename
        )
        const rawContent = await fs.readFile(filePath, 'utf8')
        resolvedData.preview = rawContent
      }
      return resolvedData
    },
    afterOperation({ operation, originalItem, item, context }) {
      if (operation === 'update') {
        if (!originalItem.isLive && item.isLive) {
          createPosts([item.preview], context).then(([{ id: postId }]) => {
            context.query.UploadPost.updateOne({
              data: { preview: '', post: { connect: { id: postId } } },
              where: { id: item.id.toString() },
            })
            context.query.Post.updateOne({
              data: { attachment: { connect: { id: item.id } } },
              where: { id: postId },
            })
          })
        }
      }
    },
  },
  access: allowAll,
})

export default config({
  db: {
    provider: 'sqlite',
    url:
      process.env.NODE_ENV === 'production'
        ? 'file:./app.db'
        : 'file:./app-dev.db',
  },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post, Tag, Category, UploadPost },
  storage: {
    local_file_storage: {
      kind: 'local',
      type: 'file',
      generateUrl: (path) => `http://localhost:3000/files${path}`,
      serverRoute: {
        path: '/files',
      },
      transformName: (filename) => {
        return filename
      },
      storagePath: '_posts',
    },
  },
})
