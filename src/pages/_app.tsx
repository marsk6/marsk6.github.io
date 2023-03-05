import { AppProps } from 'next/app'
import '../styles/tailwind.css'
import '../styles/github-markdown.css'
import '../styles/index.css'

import Layout from '@/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
