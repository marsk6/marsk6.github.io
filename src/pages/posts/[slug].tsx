import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, getRelatedTag } from '../../../script/api'
import { useRemarkSync } from 'react-remark'
import Card from '@/components/Card'
import Tags from '@/components/PostTag'
import { useContext, useEffect } from 'react'
import { SiderContext } from '@/layout/Sider'
import Link from 'next/link'
import Tag from '@/components/ui/Tag'
import Helmet from '@/components/Helmet'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'
import toc from 'markdown-toc'
import PostTag from '@/components/PostTag'
import { IconCalendar, IconClock } from '@tabler/icons-react'

type Props = {
  post: Post
  morePosts: Post[]
  preview?: boolean
}

const PostContent: React.FC<Props> = ({ post, relatedTags }) => {
  const reactContent = useRemarkSync(post.content, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
  })
  const tocReactContent = useRemarkSync(post.toc, {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
  })
  // const { setSider } = useContext(SiderContext)
  // useEffect(() => {
  //   setSider(() => {
  //     return (
  //       <>
  //         <Card className="flex flex-col gap-2 items-start">
  //           {relatedTags.map((tag) => {
  //             return (
  //               <Tag
  //                 key={tag.name}
  //                 sup={tag.posts.length}
  //                 name={tag.name}
  //               ></Tag>
  //             )
  //           })}
  //         </Card>
  //         <Card>{tocReactContent}</Card>
  //       </>
  //     )
  //   })
  // }, [])
  return (
    <>
      <Helmet title={post.title}></Helmet>
      <article className="p-2">
        <header className="mb-4">
          <p className="text-center font-medium text-4xl">{post.title}</p>
          <div className="mt-2 flex justify-center text-xs items-center gap-4">
            <div className="flex gap-0.5 items-center">
              <IconCalendar size={12} />
              {post.date}, {new Date(post.ctime).getFullYear()}
            </div>
            <div className="flex gap-0.5 items-center">
              <IconClock size={12} />
              {post.readingTime}
            </div>
          </div>
        </header>
        <section className="markdown-body max-w-none dark:bg-slate-900">{reactContent}</section>
      </article>
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
  const tocContent = toc(post.content).content
  const relatedTags = await getRelatedTag(post.tags.map((tag) => tag.name))
  return {
    props: {
      post: {
        ...post,
        toc: tocContent,
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
