import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import Menu from '@/layout/Header/Menu'

type HeaderProps = {
  className?: string
}

const headerStyle = css`
  flex: 0 0 var(--header-height);
  height: var(--header-height);
  position: sticky;
  top: 0;
`

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cx(headerStyle, 'flex shadow items-center bg-white')}>
      <a className="ml-auto mr-4 font-medium text-xl text-gray-800">Marsk in GitHub</a>
      <Menu className="container mr-auto max-w-screen-lg " />
    </header>
  )
}

export default Header
