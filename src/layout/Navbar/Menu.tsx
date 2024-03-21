import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cx } from '@emotion/css'
import { IconBrandReact, IconTags } from '@tabler/icons-react'

type MenuProps = {
  className?: string
}
const Menu: React.FC<MenuProps> = ({ className }) => {
  const router = useRouter()
  const menuItems = [
    {
      icon: <IconTags size={16} />,
      pathname: '/tags',
      label: 'Tags',
    },
    {
      icon: <IconBrandReact size={16} />,
      pathname: '/lab',
      label: 'Lab',
    },
  ]
  return (
    <nav className={cx(className, 'flex gap-2')}>
      {menuItems.map((item) => {
        const isActive = router.pathname === item.pathname
        return (
          <Link
            legacyBehavior
            passHref
            key={item.pathname}
            href={{
              pathname: item.pathname,
            }}
          >
            <a
              className={cx(
                'relative',
                'flex items-center gap-2',
                'px-4',
                'font-semibold text-slate-700 dark:text-slate-200',
                'hover:after:absolute hover:after:h-0.5 hover:after:bg-stone-400 hover:after:w-4/5 hover:after:-bottom-2',
                isActive &&
                  'after:absolute after:h-0.5 after:bg-stone-400 after:w-4/5 after:-bottom-2'
              )}
            >
              {item.icon}
              {item.label}
            </a>
          </Link>
        )
      })}
    </nav>
  )
}

export default Menu
