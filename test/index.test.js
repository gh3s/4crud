/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

chai.request('localhost:3000')
  .post('/postroute1')
  .send({ name: 'john', password: '123' })
  .end(function (err, res) {
    expect(err).to.be.null
    // eslint-disable-next-line no-unused-expressions
    //expect(res).to.have.status(200)
    //console.log(typeof res.body)
    //expect(res.body).to.be.json;
  })

