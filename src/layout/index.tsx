import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css, cx } from '@emotion/css'

import Header from './Header'
import Content from './Content'

import Sider, { SiderProvider } from './Sider'

const Main = styled.main`
  grid-template-columns: 7fr 3fr;
  flex: 1;
  min-height: calc(100.1vh - var(--header-height));
`

type LayoutProps = {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SiderProvider>
      <section className={cx('flex flex-col')}>
        <Header />
        <Main className="container mx-auto grid gap-3 max-w-screen-lg p-4">
          <Content>{children}</Content>
          <Sider />
        </Main>
      </section>
    </SiderProvider>
  )
}

export default Layout
