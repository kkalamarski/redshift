interface ElNode {
  type: string | Function
  props: any
  children: Node[]
}

interface TextNode {
  type: "text"
  value: string
}

const h = (type, props = {}, children = []): ElNode => ({
  type,
  props,
  children
})

const createElement = node => {
  if (typeof node === "string") {
    return document.createTextNode(node)
  }

  const $el = document.createElement(node.type)
  node.children.map(createElement).forEach($el.appendChild.bind($el))

  return document.createElement(node.type)
}

const updateElement = ($parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    $parent.appendChild(createElement(newNode))
  } else if (!newNode) {
    $parent.removeChild($parent.childNodes[index])
  } else if (changed(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), $parent.childNodes[index])
  } else if (newNode.type) {
    const newLength = newNode.children.length
    const oldLength = oldNode.children.length
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      )
    }
  }
}

const changed = (node1, node2) =>
  typeof node1 !== typeof node2 ||
  (typeof node1 === "string" && node1 !== node2) ||
  node1.type !== node2.type
