import React, { useState } from 'react'
import type { ReactNode } from 'react'

type CardProps = Partial<{
  className: string
  title: ReactNode
}>
const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <section className="border rounded-lg p16">
      {title && <header className="border-b px-12"></header>}
      {children}
    </section>
  )
}

export default Card
