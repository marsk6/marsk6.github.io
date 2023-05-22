import { useEffect, useState } from 'react'

function useDLE<T>(fn: () => Promise<T>, deps: any[] = []) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T>(null)
  useEffect(() => {
    setLoading(true)
    fn().then((data) => {
      setData(data)
      setLoading(false)
    })
  }, deps)
  return [loading, data] as [boolean, T]
}

export default useDLE
