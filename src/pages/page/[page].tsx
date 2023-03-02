import { getTotalPage } from '@script/api'
import React from 'react'
import Page, { PageProps, getStaticProps as pageGetStaticProps } from '@/pages'

const PerPage: React.FC<PageProps> = (props) => {
  return <Page {...props} />
}

export default PerPage

export const getStaticProps = pageGetStaticProps

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
