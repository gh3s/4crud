/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

describe('API', () => {
  it('passes as expected', function (done) {
    chai.request('localhost:3000')
      .post('/postroute1')
      .send({ name: 'john', password: '123' })
      .end((err, res) => {
        // eslint-disable-next-line no-unused-expressions
        expect(err).to.be.null
        expect(res).to.have.status(200)
        done()
      })
  })
})
