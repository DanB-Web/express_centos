const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.json('Hello World, from your server!')
})

app.get('/test2', (req, res) => {
  res.json('Hello World, from your server again!')
})

app.listen(port, () => {
  console.log(`Example Linux app listening on port ${port}`)
})