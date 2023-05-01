const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 5000

app.get('/', (req, res) => {
  res.send('chef recipe hunter')
})
app.get('/hello', (req, res) => {
  res.send('chef recipe hunter hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})