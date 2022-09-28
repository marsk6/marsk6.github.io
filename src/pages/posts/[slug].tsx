import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, getRelatedTag } from '../../../script/api'
import { useRemarkSync } from 'react-remark'
import Card from '@/components/Card'
import Tags from '@/components/PostTags'
import { useContext, useEffect } from 'react'
import { SiderContext } from '@/layout/Sider'
import Link from 'next/link'
import Tag from '@/components/Tag'
import Helmet from '@/components/Helmet'

type Props = {
  post: Post
  morePosts: Post[]
  preview?: boolean
}

const PostContent = ({ post, relatedTags }) => {
  const reactContent = useRemarkSync(post.content)
  const { setSider } = useContext(SiderContext)
  useEffect(() => {
    setSider(() => {
      return (
        <Card className="flex flex-col gap-2 items-start">
          {relatedTags.map((tag) => {
            return (
              <Tag key={tag.name} sup={tag.posts.length}>
                {tag.name}
              </Tag>
            )
          })}
        </Card>
      )
    })
  }, [])
  return (
    <>
      <Helmet title={post.title} />
      <Card>
        <article>
          <header className="mb-4">
            <p className="text-center font-medium text-2xl">{post.title}</p>
            <div className="mt-2 flex justify-center text-sm items-center">
              <span>{post.ctime}</span>
              <Tags tags={post.tags} />
            </div>
          </header>
          <section className="markdown-body">{reactContent}</section>
          <footer className="grid grid-cols-3 border-y border-gray-200 py-4 my-4">
            <div className="mr-auto">
              {post.prev && post.prev.slug && (
                <Link
                  href={{
                    pathname: '/posts/[slug]',
                    query: { slug: post.prev.slug },
                  }}
                >
                  <span
                    title={post.prev.title}
                    className="text-blue-600 border border-gray-300 rounded-2xl py-2 px-3 text-center"
                  >
                    Previous (前一篇)
                  </span>
                </Link>
              )}
            </div>
            <div className="mx-auto">
              <Link
                href={{
                  pathname: '/archive',
                }}
              >
                <span className="text-blue-600 border  border-gray-300 rounded-2xl py-2 px-3 text-center">
                  Archive（目录）
                </span>
              </Link>
            </div>
            <div className="ml-auto">
              {post.next && post.next.slug && (
                <Link
                  href={{
                    pathname: '/posts/[slug]',
                    query: { slug: post.next.slug },
                  }}
                >
                  <span
                    title={post.next.title}
                    className="text-blue-600 border mx-auto border-gray-300 rounded-2xl py-2 px-3 text-center"
                  >
                    Next（后一篇）
                  </span>
                </Link>
              )}
            </div>
          </footer>
        </article>
      </Card>
    </>
  )
}

const Post = (props: Props) => {
  const router = useRouter()
  if (!router.isFallback && !props.post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return <PostContent {...props} />
}

export default Post

type TagCountType = Record<string, number>
type Params = {
  params: {
    slug: string
    relatedTags: TagCountType
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug)
  const relatedTags = await getRelatedTag(post.tags.map((tag) => tag.name))
  return {
    props: {
      post: {
        ...post,
      },
      relatedTags,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
