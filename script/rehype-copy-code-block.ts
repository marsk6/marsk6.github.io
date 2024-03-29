import { visit } from 'unist-util-visit'

export default function rehypeCopyCodeBlock() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties) {
        node.properties.title = node.children[0].value
      }
    })
  }
}
