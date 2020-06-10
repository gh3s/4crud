const Server = require('4crud')
const server = new Server()

server
  // curl localhost:3000/getroute1?name=john
  .get('/getroute1', (req, res) => {
    console.log(`method: ${req.method} on route 1 with name: ${req.search.get('name')}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .get('/getroute2', (req, res) => {
    console.log(`method: ${req.method} on route 2`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .put('/putroute1', (req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  // curl -X POST -H "Content-Type: application/json" -d '{"name":"john","password":"abc"}' localhost:3000/postroute1
  .post('/postroute1', (req, res) => {
    console.log(`method: ${req.method} on POST route 1 with name ${req.body.name}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .post('/postroute2', (req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .delete('/deleteroute1?name=john01', (req, res) => {
    console.log(`method: ${req.method} on route 1`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .start(3000) // start server at port 3000