import React from 'react'
import style from "./index.scss";

type Props = {}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className={style.footer}>
      Powered by React Static
    </footer>
  )
}
