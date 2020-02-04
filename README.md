# 4Crud

> Fast nodejs module for API development

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/gh3s/4crud/graphs/commit-activity)
[![HitCount](https://img.shields.io/github/issues/gh3s/4crud/total.svg)](http://hits.dwyl.io/GH3S/4CRUD)
[![HitCount](http://hits.dwyl.io/GH3S/4CRUD.svg)](http://hits.dwyl.io/GH3S/4CRUD)
[![npm](https://img.shields.io/npm/dw/4crud)](https://www.npmjs.com/package/4crud)

## Getting Started

Nodejs servers using 4Crud are fast, very fast!  But, due to be in beggining, is acception JSON requests for now

### Prerequisites

* nodejs 12.x +

### Installing

```sh
npm install 4crud --save
```

### Testing

This project uses Mocha-Chai combination in /test folder
```sh
npm test
```
### A server example

```sh
const { Crud } = require('4crud')
const server = new Crud()

server
  .get((req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.url))
  })
  .put((req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .post((req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .delete((req, res) => {
    console.log(`method: ${req.method}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  })
  .start(3000) //start server at port 3000

```

## Running

```sh
npm start
```

## Release History

* 0.0.1
    * CHANGE: Work in progress

## Authors

* **GH3S** - *Initial work*  - gh3s@protonmail.ch

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributing
1. Fork it (<https://github.com/gh3s/4crud/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
