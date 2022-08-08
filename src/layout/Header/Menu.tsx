import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css, cx } from '@emotion/css'

const NavItem = styled.div``

type MenuProps = {}
const Menu: React.FC<MenuProps> = () => {
  const router = useRouter()
  const menuItems = [
    {
      pathname: '/',
      label: 'Home',
    },
    {
      pathname: '/tags',
      label: 'Tags',
    },
    {
      pathname: '/about',
      label: 'About',
    },
  ]
  return (
    <nav className="flex justify-center items-center gap-2">
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
              className={cx('py-2 px-4 rounded-md', {
                'cursor-pointer hover:bg-blue-100 hover:text-blue-700':
                  !isActive,
                'bg-blue-100 text-blue-700': isActive,
              })}
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
