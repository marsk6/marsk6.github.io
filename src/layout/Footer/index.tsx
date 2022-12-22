import React, { useState } from 'react'

type FooterProps = {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="text-center text-xs text-gray-400 mb-4">
      © 2022 Marsk. Powered by Next.js. Hosted on GitHub.
    </div>
  )
}

export default Footer
