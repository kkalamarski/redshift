import repl from "repl"
import { evaluate } from "@redshift/core"
import List from "@redshift/core/core/List"
import Maybe from "@redshift/core/core/Maybe"
import IO from "@redshift/core/core/IO"
import Map from "@redshift/core/core/Map"
import State from "@redshift/core/core/State"
import Math from "@redshift/core/core/Math"

let buffer = ""

const evalRedshiftCode = (cmd, context, filename, callback) => {
  let result = ""

  try {
    if (cmd === "clear") {
      buffer = ""
      console.clear()
    } else {
      result = evaluate(`${buffer}\n${cmd}`)
      buffer = `${buffer}\n${cmd}`
    }
  } catch (e) {
    result = e.toString()
  }

  callback(null, result)
}

const r = () => {
  const instance: any = repl.start({
    prompt: "redshift > ",
    eval: evalRedshiftCode
  })

  instance.context.List = List
  instance.context.Maybe = Maybe
  instance.context.IO = IO
  instance.context.Map = Map
  instance.context.State = State
  instance.context.Math = Math
}

export default program =>
  program
    .version("0.0.1")
    .command("repl")
    .action(r)
