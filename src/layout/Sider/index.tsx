import React, { useState, useContext, ReactNode } from 'react'
import styled from '@emotion/styled'
import Card from '@/components/Card'

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
  return (
    <aside className="flex flex-col gap-4">
      {sider}
      <Card>
        <section className="flex flex-col items-center">
          <header className="text-xl font-medium mb-4">About Me</header>
          <p>Marsk in Github</p>
        </section>
      </Card>
    </aside>
  )
}

export default Sider
