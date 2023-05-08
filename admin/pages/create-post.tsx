// admin/pages/custom-page.tsx
import Link from 'next/link'
import { PageContainer } from '@keystone-6/core/admin-ui/components'
import {
  useMutation,
  gql,
  useLazyQuery,
} from '@keystone-6/core/admin-ui/apollo'

import { Heading, Box } from '@keystone-ui/core'
import { Button } from '@keystone-ui/button'
import { useToasts } from '@keystone-ui/toast'

const ADD_POST = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
      slug
    }
  }
`

const SEARCH_TAG = gql`
  query SearchTag($where: TagWhereInput!) {
    tags(where: $where) {
      id
    }
  }
`

const ADD_TAG = gql`
  mutation AddTag($data: TagCreateInput!) {
    createTag(data: $data) {
      id
    }
  }
`

export default function CustomPage() {
  const [createItem, { loading }] = useMutation(ADD_POST)
  const [searchTag] = useLazyQuery(SEARCH_TAG)
  const [createTag] = useMutation(ADD_TAG)
  const { addToast } = useToasts()
  const createPost = async () => {
    const data = {
      title: 'title',
      tags: ['性能优化'],
      slug: `${Date.now()}`,
      content: 'hello world',
      ctime: 0,
      date: '',
      brief: 'hello',
    }
    let tags = data.tags.concat()
    const tagMap: Record<string, string> = {}
    for (let i = 0; i < tags.length; ++i) {
      const { data: existId } = await searchTag({
        variables: { where: { name: { equals: tags[i] } } },
      })
      if (existId.tags.length === 1) {
        tagMap[tags[i]] = existId.tags[0].id
      } else {
        const {
          data: { createTag: id },
        } = await createTag({
          variables: { data: { name: tags[i] } },
        })
        tagMap[tags[i]] = id
      }
    }
    data.tags = {}
    if (Object.keys(tagMap).length > 0) {
      data.tags.connect = Object.values(tagMap).map((id) => ({ id }))
    }

    const item = await createItem({ variables: { data: data } })
    if (item) {
      addToast({ title: 'create successfully', tone: 'positive' })
    }
  }

  const uploadRawPost = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.style = 'position: fixed;visibility: hidden;'
    document.body.appendChild(input)
    input.addEventListener('change')
    input.click();

    input.remove()
  }

  return (
    <PageContainer header={<Heading type="h3">Custom Page</Heading>}>
      <Box>
        <Button
          isLoading={loading}
          weight="bold"
          tone="active"
          onClick={uploadRawPost}
        >
          Create Post
        </Button>
        <p>preivew</p>
      </Box>
    </PageContainer>
  )
}
