export function copyToClipboardFromNode<T extends Element>(node: T) {
  try {
    if (node) {
      const range = document.createRange()
      range.selectNodeContents(node)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      document.execCommand('copy')
      selection.removeAllRanges()
      return true
    }
  } catch (e) {
    console.error(e)
  }
  return false
}
