import React, { useState } from 'react'

type ContentProps = {}
const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  )
}

export default Content
