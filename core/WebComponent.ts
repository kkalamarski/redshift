import * as hybrids from "hybrids"

const WebComponent = {
  init: (tag, view, update) => {
    const model = { name: "Chris" }

    const Component = {
      ...model,
      render: state => hybrids.html`
        <style>
          h1 { text-align: center }
        </style>
        <h1>Hello ${state.name} from web component!</h1>
      `
    }

    console.log(Component)

    return hybrids.define(tag, Component)
  }
}

export default WebComponent
