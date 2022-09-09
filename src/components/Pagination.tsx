import Link from 'next/link'
import React, { useState } from 'react'

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
  const list = new Array(Math.ceil(totalPage / pageSize)).fill('')
  return (
    <div className="flex">
      {list.map((l, index) => {
        return (
          <Link
            href={{ pathname: '/page/[page]', query: { page: index + 1 } }}
            key={index}
          >
            <div className="border p-3">{index + 1}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Pagination
