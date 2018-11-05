import State from "./State"
import * as hybrids from "hybrids"

export default class WebComponent {
  private element
  private state = State.of(null)
  private template = state => ""
  private constructor(private tag: string) {}

  public static of = (tag: string, update, template) => {
    let component = new WebComponent(tag)

    if (update) {
      component = component.setState(update)
    }

    if (template) {
      component = component.setTemplate(template)
    }

    return component.register()
  }

  private setState = update => {
    this.state = update(this.state)
    return this
  }

  private setTemplate = template => {
    this.template = state => template(hybrids.html, state)
    return this
  }

  private register = () => {
    const state = this.state.flatten()

    const Component = {
      ...state,
      render: this.template
    }

    this.element = hybrids.define(this.tag, Component)
    return this
  }
}
