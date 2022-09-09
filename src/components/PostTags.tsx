import React, { useState } from 'react'
import Link from 'next/link'
import { cx } from '@emotion/css'
const tagColors: Record<string, string> = {
  j: 'text-red-800',
  w: 'text-yellow-600',
  c: 'text-green-500',
  h: 'text-blue-700',
}

type PostTagsProps = {
  tags: Array<{ name: string }>
}
const PostTags: React.FC<PostTagsProps> = ({ tags }) => {
  return (
    <div className="flex cursor-pointer">
      {tags.map((tag) => (
        <Link
          href={{
            pathname: '/tags',
          }}
          key={tag.name}
        >
          <span className="py-1 px-2 text-gray-700 text-sm">
            <span className={cx(tagColors[tag.name])}>#</span>
            {tag.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default PostTags
