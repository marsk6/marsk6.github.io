import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {
  getPostBySlug,
  getAllPosts,
  getRelatedTag,
  getAllTags,
} from '../../../script/api'
import { useRemarkSync } from 'react-remark'
import Card from '@/components/Card'
import Tags from '@/components/PostTags'
import { useContext, useEffect } from 'react'
import { SiderContext } from '@/layout/Sider'
import Link from 'next/link'

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
        <Card className="flex flex-col gap-1 items-start">
          {Object.keys(relatedTags).map((tag) => {
            return (
              <div
                className="bg-gray-200 px-2 rounded-sm border border-dotted border-gray-500"
                key={tag}
              >
                {tag}
                <sup className="ml-1">{relatedTags[tag]}</sup>
              </div>
            )
          })}
        </Card>
      )
    })
  }, [])
  return (
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
        <footer className="flex border-y border-gray-200 py-4 my-4">
          {post.prev && (
            <Link
              href={{
                pathname: '/posts/[slug]',
                query: { slug: post.prev.slug },
              }}
            >
              <span title={post.prev.title} className="rounded-full py-3 px-6">
                Previous (前一篇)
              </span>
            </Link>
          )}
          <Link
            href={{
              pathname: '/archive',
            }}
          >
            <span className="text-blue-600 border mx-auto border-gray-300 rounded-2xl py-1 px-3 text-center">
              Archive（目录）
            </span>
          </Link>
          {post.next && (
            <Link
              href={{
                pathname: '/posts/[slug]',
                query: { slug: post.next.slug },
              }}
            >
              <span title={post.next.title} className="rounded-full py-3 px-6">
                Next（后一篇）
              </span>
            </Link>
          )}
        </footer>
      </article>
    </Card>
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
  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'tags',
  ])
  const tagCount = await getAllTags([])
  const relatedTags: TagCountType = {}
  post.tags.forEach((tag) => {
    relatedTags[tag] = tagCount[tag]
  })
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
  const posts = await getAllPosts(['slug'])
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
