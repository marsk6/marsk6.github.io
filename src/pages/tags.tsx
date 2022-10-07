import Card from '@/components/Card'
import { getAllPosts, getAllTags } from '@script/api'
import Link from 'next/link'
import React, { useState } from 'react'

type TagsProps = {}
const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Card>
      <section>
        <header></header>
        <ul>
          <li></li>
        </ul>
      </section>
      {tags.map((tag) => (
        <section key={tag.name}>
          <header
            className="text-2xl px-4 mb-4 py-1 border-l-blue-500 border-l-4 border-b border-b-gray-200"
            id={tag.name}
          >
            {tag.name}
          </header>
          <ul className="list-disc list-inside">
            {tag.posts.map((post) => (
              <li key={post.slug} className="cursor-pointer text-gray-600">
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
        </section>
      ))}
    </Card>
  )
}

export default Tags

export const getStaticProps = async () => {
  const tags = await getAllTags()
  return {
    props: { tags },
  }
}
