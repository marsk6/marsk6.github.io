// admin/pages/custom-page.tsx
import Link from 'next/link'
import { PageContainer } from '@keystone-6/core/admin-ui/components'
import { useMutation, gql } from '@keystone-6/core/admin-ui/apollo'

import { Heading } from '@keystone-ui/core'
import { Button } from '@keystone-ui/button'

const ADD_POST = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
      slug
    }
  }
`

export default function CustomPage() {
  const [createItem, { loading, error, data }] = useMutation(ADD_POST)
  return (
    <PageContainer header={<Heading type="h3">Custom Page</Heading>}>
      <h1>This is a custom Admin UI Page</h1>
      <p>
        It can be accessed via the route
        <Link href="/custom-page">/custom-page</Link>
        <Button
          isLoading={loading}
          weight="bold"
          tone="active"
          onClick={async () => {
            const data = {
              title: 'title',
              tags: { connect: [{ id: 'clevkpu7u00118qgyunb04uuj' }] },
              slug: `${Date.now()}`,
              content: 'hello world',
              ctime: 0,
              date: '',
              brief: 'hello',
            }
            const item = await createItem({ variables: { data: data } })
            console.log(item)
            if (item) {
              // router.push(`/${props.list.path}/${item.id}`)
            }
          }}
        >
          Create Post
        </Button>
      </p>
    </PageContainer>
  )
}
