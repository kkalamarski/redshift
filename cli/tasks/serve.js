const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000
const dir = process.cwd()
const indexPath = path.join(dir, "index.html")

module.exports = () => {
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
