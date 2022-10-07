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
import Pagination from '@/components/Pagination'
import Tag from '@/components/Tag'
import Helmet from '@/components/Helmet'

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
                ></Tag>
              )
            })}
          </div>
        </Card>
      )
    })
  }, [])
  return (
    <>
      <Helmet />
      <section>
        <div className="flex flex-col gap-2">
          {allPosts.map((post) => (
            <Card key={post.slug} className="bg-white flex flex-col gap-1">
              <Link
                href={{
                  pathname: '/posts/[slug]',
                  query: { slug: post.slug },
                }}
              >
                <span className="text-2xl font-bold cursor-pointer hover:text-blue-700">
                  {post.title}
                </span>
              </Link>
              <PostTags tags={post.tags} />
              <div className=" cursor-pointer">
                <span className="text-gray-700 py-1 px-2 text-sm">
                  {post.date}
                </span>
                <span className="text-gray-700 py-1 px-2 text-sm">
                  {post.readingTime}
                </span>
              </div>
            </Card>
          ))}
        </div>
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
