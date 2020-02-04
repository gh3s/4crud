/* eslint-disable no-undef */
const chai = require('chai')
var chaiHttp = require('chai-http')

chai.use(chaiHttp)

chai
  .request('localhost:3000')
  .get('/')
  .end(function (err, res) {
    // eslint-disable-next-line no-unused-expressions
    chai.expect(err).to.be.null
    chai.expect(res).to.have.status(200)
  })
