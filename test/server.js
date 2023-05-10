const Server = require('../')
const fs = require('fs')

const privateKey = fs.readFileSync('../testKeys/key.pem', 'utf8')
const certificate = fs.readFileSync('../testKeys/cert.pem', 'utf8')

const credentials = {
  key: privateKey,
  cert: certificate,
  passphrase: '12345' //if exists
}

const server = new Server()

server
  // curl localhost:3000/getroute1?name=john
  .get('/route1', (req, res) => {
    console.log(`GET on route 1 with name: ${req.search.get('name')}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .get('/route2', (req, res) => {
    //console.log('GET on route 2')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end('Hello')
  })
  // curl -X POST -H "Content-Type: application/json" -d '{"name":"john","password":"abc"}' localhost:3000/postroute1
  .post('/route1', (req, res) => {
    console.log(`POST route 1 with name ${req.body.name}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .post('/route2', (req, res) => {
    console.log('POST on route 2')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .put('/route1', (req, res) => {
    console.log('PUT on route 1')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .delete('/route2', (req, res) => {
    console.log(`DELETE on route 1 with name ${req.body.name}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .start(3000, credentials) // start server at port 3000