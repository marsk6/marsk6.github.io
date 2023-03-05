import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css, cx } from '@emotion/css'

const NavItem = styled.div``

type MenuProps = {
  className?: string
}
const Menu: React.FC<MenuProps> = ({ className }) => {
  const router = useRouter()
  const menuItems = [
    // {
    //   pathname: '/archive',
    //   label: 'Archive',
    // },
    {
      pathname: '/lab',
      label: 'Lab',
    },
  ]
  return (
    <nav className={cx(className, 'flex items-center gap-2')}>
      {menuItems.map((item) => {
        const isActive = router.pathname === item.pathname
        return (
          <Link
            key={item.pathname}
            href={{
              pathname: isActive ? 'javascript:void(0)' : item.pathname,
            }}
          >
            <NavItem
              className={cx(
                'py-2 px-4 rounded-md',
                'font-semibold text-slate-700 dark:text-slate-200',
                {
                  'cursor-pointer': !isActive,
                  'bg-blue-100 text-blue-700': isActive,
                }
              )}
            >
              {item.label}
            </NavItem>
          </Link>
        )
      })}
    </nav>
  )
}

export default Menu
