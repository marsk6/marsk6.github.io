import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    <nav className="flex justify-center items-center">
      {menuItems.map((item) => {
        return (
          <span key={item.pathname}>
            {router.pathname === item.pathname ? (
              item.label
            ) : (
              <Link
                href={{
                  pathname: item.pathname,
                }}
              >
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Menu
