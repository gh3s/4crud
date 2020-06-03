const http = require('http')

class Crud {
  get (url, fnc) {
    this.GET = fnc
    this.url = url
    return this
  }

  post (url, fnc) {
    this.POST = fnc
    this.url = url
    return this
  }

  put (url, fnc) {
    this.PUT = fnc
    this.url = url
    return this
  }

  delete (url, fnc) {
    this.DELETE = fnc
    this.url = url
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
            if (body !== '') { req.body = JSON.parse(body) } // TODO: Implement another acceptable methods than JSON
            const urlParams = new URL(req.url, `http://${req.headers.host}`)
            req.search = urlParams.searchParams
            console.log(urlParams.pathname)
            if (this.url === urlParams.pathname) { // route filtering (if filter is equal to url pathname (without ?'), proceed)
              this[req.method](req, res)
            } else { res.end('invalid route') }
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
