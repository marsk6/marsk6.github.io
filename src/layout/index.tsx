import React, { useState } from 'react'
import styled from '@emotion/styled'

import Header from './Header'
import Content from './Content'

import Sider from './Sider'

const Main = styled.main`
  grid-template-columns: 7fr 3fr;
`

type LayoutProps = {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main className="container mx-auto grid gap-3 max-w-screen-xl">
        <Content>{children}</Content>
        <Sider />
      </Main>
    </>
  )
}

export default Layout
