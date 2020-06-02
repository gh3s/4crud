
const { Crud } = require('..')
const server = new Crud()

server
  .get('/test', (req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .put('/test', (req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .post('/test', (req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .delete('/test', (req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .start(3000) // start server at port 3000
