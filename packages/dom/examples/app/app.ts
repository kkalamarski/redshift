import { h, render, section, div, input } from "../../index"
import { button } from "./../../index"
import { Action } from "../../state"

const update = (state: any, action: Action) => {
  const [type, payload] = action

  switch (type) {
    case "Increment":
      return state + 1

    case "Decrement":
      return state - 1

    case "Add":
      return state + payload

    case "Reset":
      return 0

    case "UpdateInput":
      return payload

    default:
      return state
  }
}

const model = 0

let Increment = () => () => ["Increment"]
let Decrement = () => () => ["Decrement"]
let Reset = () => () => ["Reset"]
let Add = (val: number) => () => ["Add", val]

let UpdateInput = () => (e: any) => ["UpdateInput", e.target.value]

let view = (state: any) =>
  div(
    { style: "padding: 10px; border: 1px solid black", class: "test-class" },
    [
      section({}, [
        button({ onclick: Increment() }, ["Increment"]),
        button({ onclick: Decrement() }, ["Decrement"]),
        button({ onclick: Add(2) }, ["Add 2"]),
        button({ onclick: Reset() }, ["Reset"])
      ]),
      `${JSON.stringify(state)}`,
      section({}, [input({ type: "text", onchange: UpdateInput() })])
    ]
  )

render("root", { view, update, model })
