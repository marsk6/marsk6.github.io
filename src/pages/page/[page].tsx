import { getYears } from '@script/api'
import React from 'react'
import Page, { PageProps, getStaticProps as pageGetStaticProps } from '@/pages/lab'

const PerPage: React.FC<PageProps> = (props) => {
  return <Page {...props} />
}

export default PerPage

export const getStaticProps = pageGetStaticProps

export async function getStaticPaths() {
  const years = await getYears()
  return {
    paths: years.map((year) => {
      return {
        params: {
          page: `${year}`,
        },
      }
    }),
    fallback: false,
  }
}
