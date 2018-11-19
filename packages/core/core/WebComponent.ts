import * as hybrids from "hybrids"

export default class WebComponent {
  public element = null
  private constructor(private tag: string) {}
  private model = {}

  private static mutate = fn => (state, event) => {
    Object.assign(state, fn(state, event))

    return state
  }

  public static of_3 = (tag: string, model, template = ``) => {
    let component = new WebComponent(tag)

    if (model) {
      component.model = model()
    }

    return component.register(template)
  }

  public register = template => {
    const model = this.model
    const Component = {
      ...model,
      render: host => template(host)
    }
    this.element = hybrids.define(this.tag, Component)
    return this
  }

  public static html_2(template, model) {
    const tpl = template.replace(/(\{{2}|\}{2})/g, "&-&").split("&-&")

    const parts = tpl.filter((v, i) => i % 2 === 0)
    const args = tpl
      .filter((v, i) => i % 2 !== 0)
      .map(x => x.trim())
      .map(x => model[x])
      .map(x => {
        if (typeof x === "function") {
          return WebComponent.mutate(x)
        }

        return x
      })

    return hybrids.html(parts, ...args)
  }

  public static html_1(template) {
    return hybrids.html([template], [])
  }
}
