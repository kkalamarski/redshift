const build = require("./tasks/build")
const gaze = require("gaze")

const watch = (entry, options) => {
  build(entry, options)
  console.log("Waiting for file changes...")

  gaze(["**/*.rh"], (err, watcher) => {
    watcher.on("all", (event, filepath) => {
      console.log(`${filepath} has changed. Recompiling...`)
      build(entry, options)
    })
  })
}

module.exports = program =>
  program
    .version("0.0.1")
    .command("watch <entry>")
    .option("-o, --output [optional]", "path to output file")
    .action(watch)
