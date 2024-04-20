import React from 'react'
import { cx } from '@emotion/css'
import Navbar from './Navbar'

import Sider, { SiderProvider } from './Sider'
import Footer from './Footer'
import Background from '@/components/Background'
import Progress from '@/components/Progress'
import { useRouter } from 'next/router'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <SiderProvider>
      <section
        className={cx(
          'flex flex-col max-w-full',
          'text-stone-800 dark:text-[#c9d1d9]'
        )}
      >
        <Background />
        <Navbar />
        {router.pathname.includes('post') && <Progress />}
        <section
          className={cx(
            'w-full flex gap-2 relative',
            'flex-col',
            'md:max-w-3xl md:flex-row md:mt-4 md:items-start md:mx-auto'
          )}
        >
          <main
            className={cx(
              'p-6 bg-[#fefefe] dark:bg-[#19191c] opacity-100 rounded shadow-[0px_0px_20px_0px_#e2e8f0]',
              'dark:shadow-stone-800',
              'order-3 md:order-2 md:w-[calc(100%-44rem)] md:p-8',
              'flex-1',
              'main-content'
            )}
          >
            {children}
          </main>
          <Sider />
        </section>
        <Footer />
      </section>
    </SiderProvider>
  )
}

export default Layout
