import Link from 'next/link'
import React, { useState } from 'react'

type TagProps = {
  sup: string | number
  name: string
}
const Tag: React.FC<TagProps> = ({ sup, name }) => {
  return (
    <Link href={`/tags#${name}`}>
      <div className="bg-gray-100 px-2 rounded-sm border border-gray-300 border-dashed">
        {name}
        <sup className="ml-1">{sup}</sup>
      </div>
    </Link>
  )
}

export default Tag
