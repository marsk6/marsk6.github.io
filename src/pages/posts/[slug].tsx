import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, getRelatedTag } from '@/api/local'
import toc from 'markdown-toc'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import dayjs from 'dayjs'
import { useSetSider } from '@/layout/Sider'
import Card from '@/components/Card'
import Tag from '@/components/ui/Tag'
import Toc from '@/components/Toc'
import Article from '@/components/Article'
import Link from 'next/link'

type Props = {
  post: Post
  morePosts: Post[]
  preview?: boolean
}

const PostContent: React.FC<Props> = ({ post, relatedTags }) => {
  useSetSider(() => (
    <>
      <Card className="flex flex-col gap-2 items-start">
        {relatedTags.map((tag) => {
          return (
            <Tag key={tag.name} sup={tag.posts.length} name={tag.name}></Tag>
          )
        })}
      </Card>
      <Card className="hidden lg:block">
        <Toc content={post.toc} />
      </Card>
    </>
  ))

  const renderFooter = () => {
    if (post.prevArticle || post.nextArticle) {
      return (
        <section className="flex mt-6">
          <div className="flex-shrink-0 basis-2/4 text-ellipsis overflow-hidden">
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
                  className="text-sm underline text-[#58a6ff]"
                  title={post.prevArticle.title}
                >
                  👈🏻 {post.prevArticle.title}
                </a>
              </Link>
            )}
          </div>
          <div className="flex-shrink-0 text-ellipsis overflow-hidden ml-auto">
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
                  className="text-sm underline text-[#58a6ff]"
                  title={post.nextArticle.title}
                >
                  {post.nextArticle.title} 👉🏻
                </a>
              </Link>
            )}
          </div>
        </section>
      )
    }
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
        dateModified={dayjs(post.ctime).format('YYYY-MM-DDTHH:mm:ssZZ')}
        authorName="Marsk"
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
