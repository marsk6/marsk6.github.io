import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import Menu from '@/layout/Navbar/Menu'
import Link from 'next/link'
import { useDarkMode } from '@/hooks'
import { IconMoon, IconSun } from '@tabler/icons-react'

type HeaderProps = {
  className?: string
}

const Navbar: React.FC<HeaderProps> = ({ className }) => {
  const darkMode = useDarkMode()
  return (
    <header
      className={cx(
        'p-3 sticky z-[9999]',
        'shadow-[0px_0px_20px_0px_#e2e8f0] bg-white',
        'dark:shadow-stone-700 dark:bg-[#19191c]',
        'lg:top-0'
      )}
    >
      <section className="flex flex-shrink-0 items-center lg:max-w-5xl lg:mx-auto">
        <Link legacyBehavior passHref href={{ pathname: '/' }}>
          <a
            className={cx(
              'font-medium text-xl cursor-pointer flex',
              'mr-auto items-center text-2xl'
            )}
          >
            <span
              className="bg-clip-text bg-gradient-to-r from-stone-500 to-stone-800 text-transparent
            dark:from-stone-500 dark:to-stone-200
            "
            >
              Hea
            </span>
            ✨
          </a>
        </Link>
        <Menu />
        <div
          className="cursor-pointer px-4 flex items-center gap-2"
          onClick={darkMode.toggle}
        >
          {darkMode.isDark ? <IconMoon size={14} /> : <IconSun size={14} />}
        </div>
      </section>
    </header>
  )
}

export default Navbar
