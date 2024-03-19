import { cx } from '@emotion/css'
import React, { useState, useContext, ReactElement, useEffect } from 'react'

type SiderProps = {}
type SideContextType = {
  addSider: (render: () => ReactElement, order?: number) => void
  siders: Array<() => ReactElement>
  removeSider: (render: () => ReactElement) => void
}
export const SiderContext = React.createContext<SideContextType>({
  addSider: () => {},
  siders: [],
  removeSider: () => {},
})

export const SiderProvider: React.FC = ({ children }) => {
  const [siders, setSider] = useState<SideContextType['siders']>([])
  const addSider: SideContextType['addSider'] = (render) => {
    setSider([render])
  }
  const removeSider: SideContextType['removeSider'] = (render) => {
    const index = siders.indexOf(render)
    siders.splice(index, 1)
    setSider([...siders])
  }
  return (
    <SiderContext.Provider value={{ addSider, siders, removeSider }}>
      {children}
    </SiderContext.Provider>
  )
}

export const SiderConsumer = SiderContext.Consumer

export const useSetSider = (render: () => ReactElement) => {
  const { addSider, removeSider } = useContext(SiderContext)
  useEffect(() => {
    addSider(render)
    return () => {
      removeSider(render)
    }
  }, [])
}

const Sider: React.FC<SiderProps> = () => {
  const { siders } = useContext(SiderContext)
  if (siders.length === 0) {
    return null
  }
  return (
    <aside
      className={cx(
        'hidden flex-col gap-4 self-start order-2 h-full',
        'md:flex md:order-3 md:w-44 md:absolute right-[-192px]'
      )}
    >
      <section className="md:sticky md:top-[72px]">
        {siders.map((sider, index) =>
          React.cloneElement(sider(), { key: index })
        )}
      </section>
    </aside>
  )
}

export default Sider
