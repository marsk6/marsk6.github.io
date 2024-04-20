import React, { useEffect, useRef } from 'react'

type ProgressProps = {}
const Progress: React.FC<ProgressProps> = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const html = document.documentElement
    const total = html.scrollHeight - html.clientHeight
    const handleScroll = () => {
      const viewedHeight = document.documentElement.scrollTop
      ref.current!.style.setProperty(
        '--viewed-height',
        `${((viewedHeight / total) * 100).toFixed(2)}%`
      )
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return <div ref={ref} className="progress"></div>
}

export default Progress
