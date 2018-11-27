import express from "express"
import path from "path"
import fs from "fs"

const app = express()
const port = 3000
const dir = process.cwd()
const indexPath = path.join(dir, "index.html")

export default () => {
  if (!fs.existsSync(indexPath)) {
    throw Error(`${indexPath} does not exist!`)
  }

  app.get("/", (req, res) => {
    res.sendFile(indexPath)
  })

  app.use("/bin", express.static("bin"))

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}
