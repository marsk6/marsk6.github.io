import { getAllPosts, getTags } from '@/api/local'
import Link from 'next/link'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { cx } from '@emotion/css'
import { useSetSider } from '@/layout/Sider'
import Card from '@/components/Card'
import Chip from '@/components/ui/Chip'

export type PageProps = {
  posts: { [year: string]: Post[] }
  years: number[]
  tags: Array<{ name: string; postsCount: number }>
}

const Home: React.FC<PageProps> = ({ posts, tags }) => {
  // useSetSider(() => (
  //   <Card className="flex flex-col gap-2 items-start">
  //     {tags.map((tag) => {
  //       return <Chip key={tag.name} sup={tag.postsCount} name={tag.name}></Chip>
  //     })}
  //   </Card>
  // ))
  const items = Object.keys(posts)
    .sort((a, b) => b - a)
    .map((year) => {
      return (
        <section key={year}>
          <header
            className={cx(
              'font-medium',
              'text-3xl text-center mb-2',
              'md:text-2xl md:text-left'
            )}
          >
            {year}
          </header>
          {posts[year].map((post) => (
            <article
              className={cx(
                'flex items-center',
                'text-xl my-6 leading-10',
                'md:text-lg md:mb-0 md:mt-4'
              )}
              key={post.slug}
            >
              <Link
                passHref
                legacyBehavior
                href={{
                  pathname: '/posts/[slug]',
                  query: { slug: post.slug },
                }}
              >
                <a
                  className={cx(
                    'text-slate-900 dark:text-[#c9d1d9] font-medium',
                    'md:ml-6',
                    'leading-normal',
                    'text-underline'
                  )}
                >
                  {post.title}
                </a>
              </Link>
              <div className="hidden md:block flex-1 border-dashed border-slate-300 border-t mx-3" />
              <div
                className={cx(
                  'w-16 text-slate-500 dark:text-slate-200',
                  'hidden text-base',
                  'md:block',
                )}
              >
                {post.date}
              </div>
            </article>
          ))}
        </section>
      )
    })
  return (
    <>
      <NextSeo
        title={process.env.BLOG.title}
        description="记录自己的前端工作总结，学习积累，技术思考，疑难问题"
        canonical={process.env.BLOG.site}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={process.env.BLOG.site}
        title={process.env.BLOG.title}
        images={[]}
        datePublished="2020-01-01T08:00:00+08:00"
        dateModified={process.env.UPDATED_DATE}
        authorName="marsk"
        description="记录自己的前端工作总结，学习积累，技术思考，疑难问题"
      />
      <section className="flex flex-col gap-8 md:gap-8">{items}</section>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const [allPosts, tags] = await Promise.all([getAllPosts(), getTags()])
  const posts: Record<number, Post[]> = {}
  allPosts.forEach((post) => {
    const year = new Date(post.ctime).getFullYear()
    if (!posts[year]) {
      posts[year] = []
    }
    posts[year].push(post)
  })
  return {
    props: { posts, tags },
  }
}
