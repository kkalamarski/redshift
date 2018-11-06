import State from "./State"
import * as hybrids from "hybrids"

export default class WebComponent {
  public element = null
  private state = State.of({})
  private template = (renderer, state) => ""
  private constructor(private tag: string) {}

  public static of = (tag: string, update, template = ``) => {
    let component = new WebComponent(tag)

    if (update) {
      component = component.setState(update)
    }

    return component.register(template)
  }

  public setState = update => {
    this.state = update(this.state)
    return this
  }

  public setTemplate = template => {
    this.template = template
    return this
  }

  public register = template => {
    const state = this.state.flatten()

    const Component = {
      ...state,
      render: host => template(hybrids.html, State.of(host))
    }

    this.element = hybrids.define(this.tag, Component)
    return this
  }
}
