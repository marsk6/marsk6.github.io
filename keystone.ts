import { config, graphql, list } from '@keystone-6/core'
import {
  text,
  multiselect,
  select,
  calendarDay,
  json,
  virtual,
  relationship,
  integer,
} from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import dayjs from 'dayjs'
import { Lists } from '.keystone/types'

const Post: Lists.Post = list({
  fields: {
    slug: text({ isIndexed: 'unique' }),
    title: text({ validation: { isRequired: true } }),
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
    ctime: text({
      defaultValue: '',
    }),
    date: text({ defaultValue: '' }),
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
      // hooks: {
      //   afterOperation
      // },
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
  hooks: {
    resolveInput: async ({ operation, resolvedData, context }) => {
      if (operation === 'create' && resolvedData.ctime === '') {
        resolvedData.ctime = dayjs().format('YYYY-MM-DD HH:mm:ss')
        resolvedData.date = dayjs().format('YYYY-MM-DD')
      }
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
        const { prev, next } = item
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
      }
    },
  },
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
})

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post, Tag, Category },
})
