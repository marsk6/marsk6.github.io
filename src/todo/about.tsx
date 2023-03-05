import { getAllPosts } from '../../script/api'
import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'

const About = () => {
  return (
    <Card>
      <h2>marsk in Github</h2>
    </Card>
  )
}

export default About

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
