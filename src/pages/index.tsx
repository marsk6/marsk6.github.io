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
import { cx } from '@emotion/css'
import PostTags from '@/components/PostTag'
import Pagination from '@/components/ui/Pagination'
import Tag from '@/components/ui/Tag'
import Helmet from '@/components/Helmet'
import TimeLine from '@/components/ui/Timeline'
import { IconClock, IconTag } from '@tabler/icons-react'
import PostTag from '@/components/PostTag'

export type PageProps = {
  allPosts: Post[]
  years: number[]
  tags: Array<{ name: string; postsCount: number }>
}

const Home: React.FC<PageProps> = ({ allPosts, years, tags }) => {
  const { setSider } = useContext(SiderContext)
  const router = useRouter()
  useEffect(() => {
    setSider(() => {
      return (
        <Card title="#Tags">
          <div className="flex gap-2 items-start p-4 flex-wrap">
            {tags.map((tag) => {
              return <Tag key={tag.name} sup={tag.postsCount} name={tag.name} />
            })}
          </div>
        </Card>
      )
    })
  }, [])
  const items = allPosts.map((post, index) => ({
    label: (
      <div className="flex flex-col px-3 pt-0.5 pb-12 gap-1">
        <p>{post.date}</p>
        {post.tags.map((tag) => (
          <PostTag key={tag.name} tag={tag.name} />
        ))}
        <div className="flex gap-0.5 items-center text-xs">
          <IconClock size={12} />
          {post.readingTime}
        </div>
      </div>
    ),
    content: (
      <Link
        href={{
          pathname: '/posts/[slug]',
          query: { slug: post.slug },
        }}
      >
        <article key={post.slug} className="flex flex-col gap-1">
          <header className="text-xl font-bold cursor-pointer text-slate-900 dark:text-slate-200">
            {post.title}
          </header>
          <p>{post.brief}</p>
        </article>
      </Link>
    ),
  }))
  return (
    <>
      <Helmet />
      <Card>
        <p className="my-4 text-center font-extrabold text-slate-900 dark:text-slate-200">
          {years}
        </p>
        <main className="flex flex-col gap-2">
          <TimeLine items={items} />
        </main>
        {/* <footer className="mt-4">
          <Pagination totalPage={totalPage} pageNum={router.query.page} />
        </footer> */}
      </Card>
    </>
  )
}

export default Home

export const getStaticProps = async ({ params = {} }) => {
  const { page = 1 } = params
  const [allPosts, tags, years] = await Promise.all([
    getAllPosts({ pageNum: page, pageSize }),
    getTags(),
    getYears()
  ])

  return {
    props: { allPosts, tags, years },
  }
}
