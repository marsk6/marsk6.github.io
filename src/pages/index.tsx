import { useContext, useEffect } from 'react'
import { getAllPosts, getAllTags } from '@script/api'
import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'
import { SiderContext } from '@/layout/Sider'
import { cx } from '@emotion/css'
import PostTags from '@/components/PostTags'

type Props = {
  allPosts: Post[]
  tags: Record<string, number>
}

const Index = ({ allPosts }: Props) => {
  const { setSider } = useContext(SiderContext)

  useEffect(() => {
    setSider(() => {
      return <Card title="#文章分类"></Card>
    })
  }, [])
  return (
    <section>
      <div className="flex flex-col gap-2">
        {allPosts.map((post) => (
          <Card key={post.slug} className="bg-white">
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
                {post.ctime}
              </span>
              <span className="text-gray-700 py-1 px-2 text-sm">
                {post.readingTime}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'category'
  ])
  // const tags = await getAllTags(allPosts)
  return {
    props: { allPosts },
  }
}
