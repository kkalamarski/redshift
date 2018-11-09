import * as hybrids from "hybrids"

export default class WebComponent {
  public element = null
  private constructor(private tag: string) {}
  private model = {}
  public static html = hybrids.html
  public static svg = hybrids.svg

  public static mutate = fn => state => {
    Object.assign(state, fn(state))

    return state
  }

  public static of = (tag: string, model, template = ``) => {
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
}
