const http = require('http')

class Crud {
  get (fnc) {
    this.GET = fnc
    return this
  }

  post (fnc) {
    this.POST = fnc
    return this
  }

  put (fnc) {
    this.PUT = fnc
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
        req.on('end', async () => {
          try {
            if (body !== '')
              req.body = JSON.parse(body) // TODO: Implement another acceptable methods than JSON
            this[req.method](req, res)    // this[method](req, res) executes fnc(req,res)
          } catch (e) {
            req.search = 'invalid search'
            return e
          }
        })
      })
      .listen(port)
  }
}

module.exports = { Crud }
