const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT ||5000
const chef = require("./chef.json")

app.get('/', (req, res) => {
  res.send('chef recipe hunter')
})
app.get('/chef', (req, res) => {
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})