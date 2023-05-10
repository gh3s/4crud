const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('../../testKeys/key.pem'),
  cert: fs.readFileSync('../../testKeys/cert.pem'),
  passphrase: '12345'
};

https.createServer(options, function (req, res) {
  if (req.url === '/getRoute1' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000);
