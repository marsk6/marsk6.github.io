import { visit } from 'unist-util-visit'

export default function remarkWikiUrl(options: { cdnUrl: string }) {
  return function (node) {
    visit(node, 'paragraph', (node, index, parent) => {
      const lastChild = node.children[node.children.length - 1]
      if (lastChild && lastChild.type === 'text') {
        let string = lastChild.value.replace(/ +$/, '')
        const matched = string.match(/^!\[{2}.+?\]{2}$/)
        // FIXME: 图片和文本在同一行就没法识别
        if (matched) {
          const imageNode = {}
          string = string.replace(/^!\[{2}(.+?)\]{2}$/, '$1')
          const keys = string.split('|')
          imageNode.type = 'image'
          imageNode.url = `${options.cdnUrl}/${keys[0]}`
          if (!imageNode.data) {
            imageNode.data = {}
          }
          if (!imageNode.data.hProperties) {
            imageNode.data.hProperties = {}
          }
          keys.forEach((key, index) => {
            if (index > 0) {
              if (/\d(x\d)?$/.test(key)) {
                const [width, height] = key.split('x')
                imageNode.data.hProperties.style = `width: ${width}px;`
                if (height) {
                  imageNode.data.hProperties.style = `${imageNode.data.hProperties.style}height: ${height}px`
                }
              } else {
                imageNode.title = key
                imageNode.alt = key
              }
            }
          })
          parent.children[index] = imageNode
        }
      }
    })
  }
}
