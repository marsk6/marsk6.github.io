import React, { useState } from 'react'
import Head from 'next/head'

type HelmetProps = {
  title?: string
}
const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
  return (
    <Head>
      <title>{title ? `${title} | ` : ''}Marsk In Github</title>
      {children}
    </Head>
  )
}

export default Helmet
