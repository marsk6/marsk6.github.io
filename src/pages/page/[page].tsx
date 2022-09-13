import { getAllPosts, getTotalPage, pageSize } from '@script/api'
import React, { useState } from 'react'
import Index from '@/pages'

type PerPageProps = {
  allPosts: Post[]
  totalPage: number
}
const PerPage: React.FC<PerPageProps> = (props) => {
  return <Index {...props} />
}

export default PerPage

export const getStaticProps = async ({ params }) => {
  const { page } = params
  const [allPosts, totalPage] = await Promise.all([
    getAllPosts({ pageNum: page, pageSize }),
    getTotalPage(),
  ])

  return {
    props: { allPosts, totalPage },
  }
}
export async function getStaticPaths() {
  const totalPage = await getTotalPage()
  const list = new Array(totalPage).fill('')
  return {
    paths: list.map((page, index) => {
      return {
        params: {
          page: `${index + 1}`,
        },
      }
    }),
    fallback: false,
  }
}
