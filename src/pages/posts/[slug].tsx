import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, getRelatedTag } from '@/api/local'
import toc from 'markdown-toc'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import dayjs from 'dayjs'
import { useSetSider } from '@/layout/Sider'
import Card from '@/components/Card'
import Chip from '@/components/ui/Chip'
import Toc from '@/components/Toc'
import Article from '@/components/Article'
import Link from 'next/link'
import { IconEditCircle } from '@tabler/icons-react'

type Props = {
  post: Post
  morePosts: Post[]
  preview?: boolean
}

const PostContent: React.FC<Props> = ({ post, relatedTags }) => {
  useSetSider(() => (
    <>
      {/* <Card className="flex flex-col gap-2 items-start">
        {relatedTags.map((tag) => (
          <Chip key={tag.name} sup={tag.posts.length} name={tag.name} />
        ))}
      </Card> */}
      <Card className="hidden md:block">
        <Toc content={post.toc} />
      </Card>
    </>
  ))

  const renderFooter = () => {
    return (
      <footer className="flex flex-col gap-6 mt-6">
        <section className="flex items-center">
          <div className="flex gap-1">
            {relatedTags.map((tag) => (
              <Chip key={tag.name} sup={tag.posts.length} name={`#${tag.name}`} />
            ))}
          </div>
          {Boolean(post.mtime) && (
            <div className="flex items-center gap-1 ml-auto whitespace-nowrap text-xs leading-6 text-slate-400">
              <IconEditCircle size={12} />
              <span>更新于 {dayjs(post.mtime).format('YYYY-MM-DD')}</span>
            </div>
          )}
        </section>

        <section className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 md:basis-2/4 text-ellipsis overflow-hidden">
            {post.prevArticle && (
              <Link
                passHref
                legacyBehavior
                href={{
                  pathname: '/posts/[slug]',
                  query: { slug: post.prevArticle.slug },
                }}
              >
                <a
                  className="text-sm underline dark:text-[#58a6ff] text-[#0969da]"
                  title={post.prevArticle.title}
                >
                  👈🏻 {post.prevArticle.title}
                </a>
              </Link>
            )}
          </div>
          <div className="flex-shrink-0 md:basis-2/4 text-ellipsis overflow-hidden ml-auto text-right">
            {post.nextArticle && (
              <Link
                passHref
                legacyBehavior
                href={{
                  pathname: '/posts/[slug]',
                  query: { slug: post.nextArticle.slug },
                }}
              >
                <a
                  className="text-sm underline dark:text-[#58a6ff] text-[#0969da]"
                  title={post.nextArticle.title}
                >
                  {post.nextArticle.title} 👉🏻
                </a>
              </Link>
            )}
          </div>
        </section>
      </footer>
    )
  }

  return (
    <>
      <NextSeo
        title={`${post.title} | ${process.env.BLOG.title}`}
        description={post.brief}
        canonical={`${process.env.BLOG.site}/posts/${post.slug}`}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={`${process.env.BLOG.site}/posts/${post.slug}`}
        title={process.env.BLOG.title}
        images={[]}
        datePublished={dayjs(post.ctime).format('YYYY-MM-DDTHH:mm:ssZZ')}
        dateModified={dayjs(post.mtime || post.ctime).format(
          'YYYY-MM-DDTHH:mm:ssZZ'
        )}
        authorName="marsk"
        description={post.brief || post.title}
      />
      <Article post={post} />
      {renderFooter()}
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
