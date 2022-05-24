import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/tailwind.css'
import '@/styles/theme/misty-light-windows.css'
import Layout from '@/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
