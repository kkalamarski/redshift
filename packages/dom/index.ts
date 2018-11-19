import { diff } from "./diff"
import { registerStore, subscribe, Update } from "./state"

interface Init {
  view: (state: any) => any
  update: Update
  model: any
}

export const h = (type: string, props: any = {}, children: any[] = []) => ({
  type,
  props,
  children
})

export const render = ($parent: any, { view, update, model }: Init) => {
  let oldNode: any = null

  subscribe((state: any) => {
    const rendered = view(state)

    requestAnimationFrame(() => {
      diff($parent, rendered, oldNode)

      oldNode = rendered
    })
  })

  registerStore(update, model)
}

// Block elements
type Element = (props: any, children?: any[]) => any

export const div: Element = (props, children) => h("div", props, children)
export const section: Element = (props, children) =>
  h("section", props, children)
export const article: Element = (props, children) =>
  h("article", props, children)
export const p: Element = (props, children) => h("p", props, children)
export const header: Element = (props, children) => h("header", props, children)
export const footer: Element = (props, children) => h("footer", props, children)
export const aside: Element = (props, children) => h("aside", props, children)
export const canvas: Element = (props, children) => h("canvas", props, children)

// Inline elements
export const button: Element = (props, children) => h("button", props, children)
export const input: Element = props => h("input", props)
export const span: Element = (props, children) => h("span", props, children)
export const img: Element = props => h("img", props)
export const form: Element = (props, children) => h("form", props, children)
export const ul: Element = (props, children) => h("ul", props, children)
export const ol: Element = (props, children) => h("ul", props, children)
export const li: Element = (props, children) => h("li", props, children)
