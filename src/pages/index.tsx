import { useContext, useEffect } from 'react'
import {
  getAllPosts,
  getAllTags,
  getCategories,
  getTotalPage,
  pageSize,
} from '@script/api'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import Card from '@/components/Card'
import { SiderContext } from '@/layout/Sider'
import { cx } from '@emotion/css'
import PostTags from '@/components/PostTags'
import Pagination from '@/components/ui/Pagination'
import Tag from '@/components/ui/Tag'
import Helmet from '@/components/Helmet'
import TimeLine from '@/components/ui/Timeline'

type Props = {
  allPosts: Post[]
  totalPage: number
  // tags: Record<string, number>
}

const Index: React.FC<Props> = ({ allPosts, totalPage, categories }: Props) => {
  const { setSider } = useContext(SiderContext)
  const router = useRouter()
  useEffect(() => {
    setSider(() => {
      return (
        <Card title="#文章分类">
          <div className="flex flex-col gap-2 items-start p-4">
            {categories.map((category) => {
              return (
                <Tag
                  key={category.name}
                  sup={category.count}
                  name={category.name}
                />
              )
            })}
          </div>
        </Card>
      )
    })
  }, [])
  const items = allPosts.map((post, index) => ({
    label: post.date,
    content: (
      <Link
        href={{
          pathname: '/posts/[slug]',
          query: { slug: post.slug },
        }}
      >
        <article key={post.slug} className="bg-white flex flex-col gap-1">
          <header className="text-xl font-bold cursor-pointer hover:text-blue-700">
            {post.title}
          </header>
          <p>{post.breif}</p>
        </article>
      </Link>
    ),
  }))
  return (
    <>
      <Helmet />
      <section>
        <p className="text-center text-3xl text-slate-900 font-extrabold dark:text-slate-200">
          Latest Updates
        </p>
        <main className="flex flex-col gap-2">
          <TimeLine items={items} />
        </main>
        <footer className="mt-4">
          <Pagination totalPage={totalPage} pageNum={router.query.page} />
        </footer>
      </section>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const pageNum = 1
  const [allPosts, totalPage, categories] = await Promise.all([
    getAllPosts({ pageNum, pageSize }),
    getTotalPage(),
    getCategories(),
  ])

  return {
    props: { allPosts, totalPage, categories },
  }
}
