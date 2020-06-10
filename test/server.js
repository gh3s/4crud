
const { Server } = require('..')
const server = new Server()

server
  .get('/getroute1', (req, res) => {
    console.log(`method: ${req.method} on route /getroute1`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .get('/getroute2', (req, res) => {
    console.log(`method: ${req.method} on route /getroute2`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .get('/getroute3', (req, res) => {
    console.log(`method: ${req.method} on route /getroute3`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .put('/putroute1', (req, res) => {
    console.log(`method: ${req.method} on route /putroute1`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .post('/postroute1', (req, res) => {
    console.log(`method: ${req.method} on route /postroute1`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .post('/postroute2', (req, res) => {
    console.log(`method: ${req.method} on route /postroute2`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .delete('/deleteroute1', (req, res) => {
    console.log(`method: ${req.method} on route /deleteroute1`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })

  server.start(3000) // start server at port 3000
