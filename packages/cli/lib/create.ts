import create from "./tasks/create"

export default program =>
  program
    .version("0.0.1")
    .command("create <projectName>")
    .action(create)
