const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Risposta server node express !')
})

app.get('/page2', (req, res) => {
  res.send('Risposta server node express da page 2 !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})