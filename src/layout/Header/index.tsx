import React, { useState } from 'react'
import Menu from '@/layout/Header/Menu'

type HeaderProps = {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Menu />
    </header>
  )
}

export default Header
