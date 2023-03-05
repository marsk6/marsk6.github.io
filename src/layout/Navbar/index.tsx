import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import Menu from '@/layout/Navbar/Menu'
import Link from 'next/link'
import { useDarkMode } from '@/hooks'

type HeaderProps = {
  className?: string
}

const headerStyle = css`
  flex: 0 0 var(--header-height);
  height: var(--header-height);
  position: sticky;
  top: 0;
`

const Navbar: React.FC<HeaderProps> = ({ className }) => {
  const darkMode = useDarkMode(false)
  return (
    <header
      className={cx(
        headerStyle,
        'flex shadow items-center bg-white dark:bg-slate-800'
      )}
    >
      <Link href={{ pathname: '/' }}>
        <h1 className="ml-auto my-auto dark:text-slate-200 mr-4 font-medium text-xl text-gray-800 cursor-pointer">
          Marsk&apos;s Blog
        </h1>
      </Link>
      <Menu className="container mr-auto max-w-screen-lg " />
      <div className="mr-4 cursor-pointer" onClick={darkMode.toggle}>
        {darkMode.isDark ? <span>🌑</span> : <span>🌞</span>}
      </div>
    </header>
  )
}

export default Navbar
