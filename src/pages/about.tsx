import { getAllPosts } from '../../script/api'
import Head from 'next/head'
import Link from 'next/link'

const About = () => {
  return (
    <section>
      <h2>marsk in Github</h2>
    </section>
  )
}

export default About

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
