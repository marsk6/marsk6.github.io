import React, { useState, useContext, ReactNode } from 'react'
import styled from '@emotion/styled'

type SiderProps = {}
export const SiderContext = React.createContext({
  setSider: (ele: ReactNode) => {},
  sider: null,
})

export const SiderProvider: React.FC = ({ children }) => {
  const [sider, _setSider] = useState(null)
  const setSider = (ele) => {
    _setSider(ele)
  }
  return (
    <SiderContext.Provider value={{ setSider, sider }}>
      {children}
    </SiderContext.Provider>
  )
}

export const SiderConsumer = SiderContext.Consumer

const Sider: React.FC<SiderProps> = () => {
  const { sider } = useContext(SiderContext)
  // return null;
  return <aside>
    {sider}</aside>
}

export default Sider
