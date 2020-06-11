var express = require('express')
var app = express()

app.get('/getroute1', (req, res) => {
  res.end('Hello World!')
})

app.listen(3000)
