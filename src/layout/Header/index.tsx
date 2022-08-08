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
      <section className="flex container mx-auto  max-w-screen-lg">
        <Menu />
      </section>
    </header>
  )
}

export default Header
