import { useContext, useEffect } from 'react'
import { getAllPosts, getAllTags } from '@script/api'
import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'
import { SiderContext } from '@/layout/Sider'
import { cx } from '@emotion/css'

type Props = {
  allPosts: Post[]
  tags: string[]
}

const tagColors: Record<string, string> = {
  j: 'text-red-800',
  w: 'text-yellow-600',
  c: 'text-green-500',
  h: 'text-blue-700',
}

const Index = ({ allPosts, tags }: Props) => {
  const { setSider } = useContext(SiderContext)

  useEffect(() => {
    setSider(() => {
      return (
        <Card title="#Tag">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={{
                pathname: '/tags',
              }}
            >
              <div className="p-3 cursor-pointer border-b border-gray-100 text-gray-600">
                {tag}
              </div>
            </Link>
          ))}
        </Card>
      )
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
            <div className="flex cursor-pointer">
              {post.tags.map((tag) => (
                <Link
                  href={{
                    pathname: '/tags',
                  }}
                  key={tag}
                >
                  <span className="py-1 px-2 text-gray-700 text-sm">
                    <span className={cx(tagColors[tag[0]])}>#</span>
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
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
    'excerpt',
    'tags',
  ])
  const tags = getAllTags(allPosts)
  return {
    props: { allPosts, tags },
  }
}
