const Server = require('4crud')
const server = new Server()

server
  .get('/getroute1', (req, res) => {
    res.end('Hello world')
  })
  .start(3000)
