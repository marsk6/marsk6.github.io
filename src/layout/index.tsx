import React from 'react'
import styled from '@emotion/styled'
import { cx } from '@emotion/css'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Content from './Content'

import { SiderProvider } from './Sider'
import Footer from './Footer'

import LabLayout from './Lab'

const Main = styled.main`
  flex: 1;
  min-height: calc(100.1vh - var(--header-height));
`

type LayoutProps = {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  if (router.pathname === '/lab') {
    return <LabLayout>{children}</LabLayout>
  }
  return (
    <SiderProvider>
      <section
        className={cx(
          'flex flex-col max-w-full',
          'bg-white dark:bg-slate-900',
          'text-slate-700 dark:text-slate-50'
        )}
      >
        <Navbar />
        <Main className="container mx-auto max-w-3xl p-4">
          <Content>{children}</Content>
        </Main>
        <Footer />
      </section>
    </SiderProvider>
  )
}

export default Layout
