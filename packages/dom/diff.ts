import { setProps, updateProps, addEventListeners } from "./props"

const changed = (node1: any, node2: any) =>
  typeof node1 !== typeof node2 ||
  (typeof node1 === "string" && node1 !== node2) ||
  node1.type !== node2.type ||
  (node1.props && node1.props.forceUpdate)

const createElement = (node: any) => {
  if (typeof node === "string") {
    return document.createTextNode(node)
  }

  const $el = document.createElement(node.type)
  setProps($el, node.props)
  addEventListeners($el, node.props)
  node.children.map(createElement).forEach($el.appendChild.bind($el))

  return $el
}

export const diff = (
  $parent: any,
  newNode: any,
  oldNode: any,
  index: number = 0
) => {
  if (!oldNode) {
    $parent.appendChild(createElement(newNode))
  } else if (!newNode) {
    $parent.removeChild($parent.childNodes[index])
  } else if (changed(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), $parent.childNodes[index])
  } else if (newNode.type) {
    updateProps($parent.childNodes[index], newNode.props, oldNode.props)

    const newLength = newNode.children.length
    const oldLength = oldNode.children.length
    for (let i = 0; i < newLength || i < oldLength; i++) {
      diff(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      )
    }
  }
}
