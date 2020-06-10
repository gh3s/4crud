const http = require('http')

class Crud {

 fncStore(method, url, fnc){
    let arr = {
      [method]: {
        urlArr: [url],
        fncArr: [fnc]
      }
    }
    arr[method].urlArr.push(url)
    console.log(arr)
    return arr
  }

  get (url, fnc) {

    this.fncStore('GET', url, fnc)
    this.GET.url.push(url)
    this.GET.fnc.push(fnc)
    return this
  }

  post (url, fnc) {
    this.POST.url.push(url)
    this.POST.fnc.push(fnc)
    return this
  }

  put (url, fnc) {
    this.PUT.url.push(url)
    this.PUT.fnc.push(fnc)
    return this
  }

  delete (url, fnc) {
    this.DELETE.url.push(url)
    this.DELETE.fnc.push(fnc)
    return this
  }

  start (port) {
    http.createServer((req, res) => {
      this.method(req, res)
      let body = ''
      req.on('data', chunk => body += chunk)
      req.on('end', async () => {
        try {
          if (body !== '') { req.body = JSON.parse(body) } // TODO: Implement another acceptable methods than JSON
          const urlParams = new URL(req.url, `http://${req.headers.host}`)
          req.search = urlParams.searchParams
          let path = urlParams.pathname
          console.log(path)
          let npath = this[req.method].url.indexOf(path)
          console.log(npath)
          npath!==-1 ? this[req.method].fnc[npath](req, res) : res.end('invalid route') //If url exists in url array, then execute relative function (fnc is an array)
        } catch (e) {
          req.search = 'invalid search'
          return e
        }
      })
    })
    .listen(port)
  }
}

class Server extends Crud {

  constructor(url, fnc){
    super(url, fnc)
    this.GET = this.POST = this.PUT = this.DELETE = {
      url: [],
      fnc: []
    }
  }

  method(req, res) {
    console.log(req)
  }

}

module.exports = { Server }
