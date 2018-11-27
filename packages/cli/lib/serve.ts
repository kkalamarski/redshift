import fs from "fs"
import serve from "./tasks/serve"
import build from "./tasks/build"
import gaze from "gaze"

const buildAndServe = (entry, options) => {
  build(entry, options)
  console.log("Waiting for file changes...")

  gaze(["**/*.rh"], (err, watcher) => {
    watcher.on("all", (event, filepath) => {
      console.log(`${filepath} has changed. Recompiling...`)
      build(entry, options)
    })
  })

  serve()
}

export default program =>
  program
    .version("0.0.1")
    .command("serve <entry>")
    .option("-o, --output [optional]", "path to output file")
    .action(buildAndServe)
