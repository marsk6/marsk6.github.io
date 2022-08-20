import Card from '@/components/Card'
import { getAllPosts, getAllTags } from '@script/api'
import Link from 'next/link'
import React, { useState } from 'react'

type TagsProps = {}
const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Card>
      {Object.entries(tags).map(([tagName, tagCount]) => (
        <Link
          key={tagName}
          href={{
            pathname: '/tags',
          }}
        >
          <div className="p-3 cursor-pointer text-gray-600">
            {tagName}
            {tagCount}
          </div>
        </Link>
      ))}
    </Card>
  )
}

export default Tags

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
    props: { tags },
  }
}
