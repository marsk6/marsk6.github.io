import { css, cx } from '@emotion/css'
import Link from 'next/link'
import React from 'react'

type TagProps = {
  sup: string | number
  name: string
}

const shadow3D = css`
  transition: 0.1 all;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.9), inset 0 0 0 rgba(255, 255, 255, 0.9),
    inset 0 0 0 rgba(0, 0, 0, 0.4);
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.9),
      inset -4px -4px 8px rgba(255, 255, 255, 0.9),
      inset 2px 2px 6px rgba(0, 0, 0, 0.4);
  }
`

const Tag: React.FC<TagProps> = ({ sup, name }) => {
  return (
    <Link href={`/tags#${name}`} legacyBehavior passHref>
      <a
        className={cx(
          'text-xs rounded-full py-1.5 px-3 font-medium',
          'bg-stone-50 dark:bg-stone-900',
          'hover:bg-stone-200, dark:hover:bg-stone-400',
          shadow3D
        )}
      >
        {name}
        <sup className="ml-1">{sup}</sup>
      </a>
    </Link>
  )
}

export default Tag
