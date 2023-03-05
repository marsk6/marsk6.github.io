import Link from 'next/link'
import React, { useState } from 'react'

type TagProps = {
  sup: string | number
  name: string
}
const Tag: React.FC<TagProps> = ({ sup, name }) => {
  return (
    <Link href={`/tags#${name}`} passHref>
      <a className="text-xs rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
        {name}
        <sup className="ml-1">{sup}</sup>
      </a>
    </Link>
  )
}

export default Tag
