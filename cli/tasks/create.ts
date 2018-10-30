import fs from "fs"
import chalk from "chalk"
import path from "path"
import generate from "../../generator"
import { exec } from "child_process"

const build = (entry, options) => {
  const target = path.join(process.cwd(), entry)

  if (fs.existsSync(target)) {
    console.clear()
    console.log(
      chalk.bgRed(" Error "),
      chalk.red(`Directory ${target} already exists!`)
    )
  } else {
    console.clear()
    console.log(chalk.green("Generating Redshift project..."))
    generate(target)
    console.log("Project files generated!")
    console.log(chalk.green("Installing dependencies"))
    exec(`cd ${entry} && npm install`, () => {
      console.log(
        chalk.black.bgGreen(" Scccess "),
        chalk.green(` Created new project at ${target}`)
      )
      console.log(`Type \`cd ${entry} && npm start\` to start hacking!`)
    })
  }
}

export default build
