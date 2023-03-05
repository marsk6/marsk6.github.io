import Card from '@/components/Card'
import { getAllPosts } from '@script/api'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import Link from 'next/link'
import React, { useState } from 'react'

dayjs.extend(advancedFormat)

type ArchiveProps = {}
const Archive: React.FC<ArchiveProps> = ({ posts }) => {
  const map: any = {}
  posts.forEach((post) => {
    const date = dayjs(post.date, 'YYYY-MM-DD')
    const year = date.year()
    const month = date.month().toString().padStart(2, '0')

    if (!map[year]) {
      map[year] = {}
    }
    if (!map[year][month]) {
      map[year][month] = []
    }
    map[year][month].push([date, post])
  })
  return (
    <Card>
      {Object.keys(map).map((year) => (
        <section key={year}>
          <header
            className="text-2xl px-4 mb-4 py-1 border-l-blue-500 border-l-4 border-b border-b-gray-200"
            id={year}
          >
            {year}
          </header>
          <ul className="mb-4">
            {Object.keys(map[year]).map((month) => (
              <li key={month}>
                <p className="text-xl mb-4">{month}</p>
                <ul className="list-disc list-inside">
                  {map[year][month].map(([date, post]) => (
                    <li
                      key={post.slug}
                      className="cursor-pointer text-gray-600"
                    >
                      <Link
                        href={{
                          pathname: '/posts/[slug]',
                          query: { slug: post.slug },
                        }}
                      >
                        <span className="text-blue-600">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Card>
  )
}

export default Archive

export const getStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: { posts },
  }
}
