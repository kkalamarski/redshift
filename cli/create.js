const create = require("./tasks/create")

module.exports = program =>
  program
    .version("0.0.1")
    .command("create <projectName>")
    .action(create)
