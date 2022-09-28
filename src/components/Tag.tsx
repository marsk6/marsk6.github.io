import React, { useState } from 'react'

type TagProps = {
  sup: string | number
}
const Tag: React.FC<TagProps> = ({ sup, children }) => {
  return (
    <div className="bg-gray-100 px-2 rounded-sm border border-gray-300 border-dashed">
      {children}
      <sup className="ml-1">{sup}</sup>
    </div>
  )
}

export default Tag
