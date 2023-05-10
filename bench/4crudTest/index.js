const Server = require('../../')
const server = new Server()

server
  .get('/getRoute1', (req, res) => {
    res.end('Hello world')
  })
  .start(3000)
