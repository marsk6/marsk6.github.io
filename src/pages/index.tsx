import { useContext, useEffect } from 'react'
import {
  getAllPosts,
  getAllTags,
  getTags,
  getTotalPage,
  getYears,
  pageSize,
} from '@script/api'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import Card from '@/components/Card'
import { SiderContext } from '@/layout/Sider'
import { css, cx } from '@emotion/css'
import PostTags from '@/components/PostTag'
import Pagination from '@/components/ui/Pagination'
import Tag from '@/components/ui/Tag'
import Helmet from '@/components/Helmet'
import TimeLine from '@/components/ui/Timeline'
import { IconClock, IconTag } from '@tabler/icons-react'
import PostTag from '@/components/PostTag'

export type PageProps = {
  posts: { [year: string]: Post[] }
  years: number[]
  tags: Array<{ name: string; postsCount: number }>
}

const Home: React.FC<PageProps> = ({ posts }) => {
  const items = Object.keys(posts).map((year, index) => {
    return (
      <section key={year}>
        <header className="font-medium text-2xl mb-2">{year}</header>
        {posts[year].map((post) => (
          <article className="flex text-lg leading-10" key={post.slug}>
            <div className="mr-16 w-16 text-right text-slate-500 dark:text-slate-200">{post.date}</div>
            <Link
              passHref
              href={{
                pathname: '/posts/[slug]',
                query: { slug: post.slug },
              }}
            >
              <a className="text-slate-900 dark:text-slate-200 font-medium hover:underline">{post.title}</a>
            </Link>
          </article>
        ))}
      </section>
    )
  })
  return (
    <>
      <Helmet />
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
