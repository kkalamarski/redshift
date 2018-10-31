import { define, html } from "hybrids"

const WebComponent = {
  init: (tag, view, update) => {
    const model = update()

    const Component = {
      ...model,
      render: state => html`
        <h1>Hello World from web component!</h1>
      `
    }

    define(tag, Component)
  }
}

export default WebComponent
