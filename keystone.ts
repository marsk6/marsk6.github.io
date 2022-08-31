import { config, list } from '@keystone-6/core'
import { text, multiselect, select } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import { Lists } from '.keystone/types'

const Post: Lists.Post = list({
  fields: {
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    title: text({ validation: { isRequired: true } }),
    tags: multiselect({
      options: [
        {
          label: '23',
          value: '32',
        },
        {
          label: '2322',
          value: '3222',
        },
        {
          label: '2311',
          value: '3211',
        },
      ],
    }),
    categoty: select({
      options: [
        {
          label: '23',
          value: '32',
        },
        {
          label: '2322',
          value: '3222',
        },
        {
          label: '2311',
          value: '3211',
        },
      ],
    }),
    content: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
  hooks:{ 
    
  }
})

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
})
