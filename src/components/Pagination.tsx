import Link from 'next/link'
import React, { useState } from 'react'
import { cx } from '@emotion/css'

type PaginationProps = {
  pageNum: number
  totalPage: number
  pageSize?: number
}
const Pagination: React.FC<PaginationProps> = ({
  pageNum,
  totalPage,
  pageSize = 1,
}) => {
  const list = new Array(totalPage).fill('')
  return (
    <div className="flex">
      {list.map((l, index) => {
        const isCurrent = index + 1 === pageNum
        return (
          <Link
            href={{ pathname: '/page/[page]', query: { page: index + 1 } }}
            key={index}
          >
            <div
              className={cx('p-3', {
                border: !isCurrent,
                'bg-blue-400': isCurrent,
                'text-white': isCurrent,
              })}
            >
              {index + 1}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Pagination
