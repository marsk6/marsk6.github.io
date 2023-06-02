import { cx } from '@emotion/css'
import Link from 'next/link'
import React from 'react'

type TagProps = {
  sup: string | number
  name: string
}

const Tag: React.FC<TagProps> = ({ sup, name }) => {
  return (
    <Link href={`/tags#${name}`} legacyBehavior passHref>
      <a
        className={cx(
          'rounded-full py-1 px-2 font-medium text-xs',
          'bg-stone-50 dark:bg-stone-900',
          'hover:bg-stone-200, dark:hover:bg-stone-400'
        )}
      >
        {name}
        <sup className="ml-1 scale-75 inline-block">{sup}</sup>
      </a>
    </Link>
  )
}

export default Tag
