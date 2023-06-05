import { useEffect, useRef, useState } from 'react'

const createLink = (href: string, id: string) => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  link.id = id
  document.head.insertBefore(link, document.head.firstChild)
  return link
}

const toggleCodeBlockTheme = (isDark: boolean) => {
  const darkLink = document.querySelector<HTMLLinkElement>(
    '#dark-code-block-theme'
  )
  const lightLink = document.querySelector<HTMLLinkElement>(
    '#light-code-block-theme'
  )
  if (isDark) {
    if (darkLink) {
      darkLink.rel = 'stylesheet'
    } else {
      createLink(
        'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-one-dark.min.css',
        'dark-code-block-theme'
      )
    }
    lightLink?.setAttribute('rel', 'disabled-stylesheet')
  } else {
    if (lightLink) {
      lightLink.rel = 'stylesheet'
    } else {
      createLink(
        'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-one-light.min.css',
        'light-code-block-theme'
      )
    }
    darkLink?.setAttribute('rel', 'disabled-stylesheet')
  }
}

export const useDarkMode = () => {
  const [isDark, setDark] = useState(false)
  const isInit = useRef(false)
  useEffect(() => {
    if (!isInit.current) {
      const nextState = localStorage.getItem('themeMode') === 'dark'
      setDark(nextState)
      isInit.current = true;
    } else {
      if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('themeMode', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('themeMode', 'light')
      }
      toggleCodeBlockTheme(isDark)
    }

  }, [isDark])

  return {
    isDark,
    toggle: () => {
      setDark(!isDark)
    },
  }
}
