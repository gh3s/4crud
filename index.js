const http = require('http')

class Crud {
  get (fnc) {
    this.GET = fnc
    return this
  }

  put (fnc) {
    this.PUT = fnc
    return this
  }

  post (fnc) {
    this.POST = fnc
    return this
  }

  delete (fnc) {
    this.DELETE = fnc
    return this
  }

  start (port) {
    http
      .createServer((req, res) => {
        let body = ''
        // eslint-disable-next-line no-return-assign
        req.on('data', chunk => body += chunk)
        req.on('end', () => {
          try {
            if (body !== '') {
              req.body = JSON.parse(body)
              this[req.method](req, res) // this[method](req, res) executes fnc(req,res)
            } else this.GET(req, res)
          } catch (e) {
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/plain')
            res.end('Invalid Request!')
          }
        })
      })
      .listen(port)
  }
}

module.exports = { Crud }
