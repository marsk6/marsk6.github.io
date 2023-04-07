import React from 'react'
import { css, cx } from '@emotion/css'
import Navbar from './Navbar'

import Sider, { SiderProvider } from './Sider'
import Footer from './Footer'
import Background from '@/components/Background'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SiderProvider>
      <section
        className={cx(
          'flex flex-col max-w-full',
          'bg-stone-50 dark:bg-stone-900',
          'text-stone-800  dark:text-[#c9d1d9]'
        )}
      >
        <Background />
        <section className="container max-w-6xl flex mx-auto gap-2 mt-4 relative items-start">
          <Navbar />
          <section
            className={cx(
              'p-6 bg-[#fefefe] dark:bg-[#1a1a1a] opacity-100 rounded shadow-[0px_0px_20px_0px_#e2e8f0]',
              'dark:shadow-stone-700',
              css`
                flex: 1;
                min-height: calc(100.1vh - var(--header-height));
              `
            )}
          >
            {children}
          </section>
          <Sider />
        </section>
        <Footer />
      </section>
    </SiderProvider>
  )
}

export default Layout
