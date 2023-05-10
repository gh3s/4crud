/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const https = require('https'); // Adicione esta linha
const expect = chai.expect;

chai.use(chaiHttp);

describe('API', () => {
  it('passes as expected', function (done) {
    // Crie um agente de requisição HTTP personalizado que ignora a verificação SSL
    const customAgent = new https.Agent({
      rejectUnauthorized: false,
    });

    chai.request('https://localhost:3000')
      .post('/postroute1')
      .agent(customAgent) // Use o agente personalizado aqui
      .send({ name: 'john', password: '123' })
      .end((err, res) => {
        // eslint-disable-next-line no-unused-expressions
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
});
