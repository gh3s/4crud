const polka = require('polka');

polka()
  .get('/getroute1', (req, res) => res.end('Hello'))
  .listen(3000);
