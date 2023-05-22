import Article from '@/components/Article'
import React, { useEffect, useState } from 'react'

type PriviewProps = {}
const Priview: React.FC<PriviewProps> = () => {
  const [post, setPost] = useState(null)
  useEffect(() => {
    const cb = (e: MessageEvent) => {
      setPost(JSON.parse(e.data))
    }
    window.addEventListener('message', cb)
    return () => {
      window.removeEventListener('message', cb)
    }
  }, [])
  if (!post) {
    return <p>no data</p>
  }
  return <Article post={post} />
}

export default Priview

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
