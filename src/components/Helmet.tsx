import React, { useState } from 'react'
import Head from 'next/head'

type HelmetProps = {
  title?: string
}
const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
  return (
    <Head>
      <link href="/favicon/favicon.ico" rel="icon" sizes="16x16" type="image/png"></link>
      <title>{title ? `${title} | Marsk In Github` : 'Marsk In Github'}</title>
      {children}
    </Head>
  )
}

export default Helmet
