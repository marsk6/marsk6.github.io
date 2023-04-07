import { getAllPosts } from '@script/api'
import Link from 'next/link'
import { NextSeo, ArticleJsonLd } from 'next-seo'

export type PageProps = {
  posts: { [year: string]: Post[] }
  years: number[]
  tags: Array<{ name: string; postsCount: number }>
}

const Home: React.FC<PageProps> = ({ posts }) => {
  const items = Object.keys(posts)
    .sort((a, b) => b - a)
    .map((year) => {
      return (
        <section key={year}>
          <header className="font-medium text-2xl mb-2">{year}</header>
          {posts[year].map((post) => (
            <article className="flex text-lg leading-10" key={post.slug}>
              <div className="mr-16 w-16 text-right text-slate-500 dark:text-slate-200">
                {post.date}
              </div>
              <Link
                passHref
                legacyBehavior
                href={{
                  pathname: '/posts/[slug]',
                  query: { slug: post.slug },
                }}
              >
                <a className="text-slate-900 dark:text-[#c9d1d9] font-medium hover:underline">
                  {post.title}
                </a>
              </Link>
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
        authorName="Marsk"
        description="记录自己的前端工作总结，学习积累，技术思考，疑难问题"
      />
      <section className="flex flex-col gap-4">{items}</section>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const [allPosts] = await Promise.all([getAllPosts()])
  const posts: Record<number, Post[]> = {}
  allPosts.forEach((post) => {
    const year = new Date(post.ctime).getFullYear()
    if (!posts[year]) {
      posts[year] = []
    }
    posts[year].push(post)
  })
  return {
    props: { posts },
  }
}
