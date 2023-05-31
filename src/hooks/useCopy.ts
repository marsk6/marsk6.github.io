import { useCallback, useEffect, useMemo, useState } from 'react'
export function copyToClipboard(text: string) {
  try {
    if (text) {
      const p = document.createElement('p')
      p.innerText = text
      p.style.position = 'absolute'
      p.style.left = '-99999px'
      document.body.appendChild(p)
      const range = document.createRange()
      range.selectNodeContents(p)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      document.execCommand('copy')
      selection.removeAllRanges()
      p.remove()
      return true
    }
  } catch (e) {
    console.error(e)
  }
  return false
}

function useCopy(text: string) {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = useMemo(() => {
    setIsCopied(false)
    return () => {
      copyToClipboard(text)
      setIsCopied(true)
    }
  }, [text])

  return [isCopied, handleCopy] as [boolean, () => void]
}

export default useCopy
