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
          href={`/tags#${tag.name}`}
          key={tag.name}
        >
          <div className="px-2 py-0.5 text-emerald-800 text-xs rounded-2xl bg-lime-400">
            <span className={cx(tagColors[tag.name])}>#</span>
            {tag.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostTags
