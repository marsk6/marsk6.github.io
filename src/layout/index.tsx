import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'

import Sider from './Sider'

type LayoutProps = {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto grid gap-3 max-w-screen-xl">
        <Content>{children}</Content>
        <Sider />
      </main>
    </>
  )
}

export default Layout
