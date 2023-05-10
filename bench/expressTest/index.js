const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

// Defina o caminho para suas chaves e certificados
const privateKeyPath = '../../testKeys/key.pem';
const certificatePath = '../../testKeys/cert.pem';

// Leia as chaves e os certificados
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');

// Crie as credenciais
const credentials = {
  key: privateKey,
  cert: certificate,
  passphrase: '12345'
};

// Defina suas rotas
app.get('/getRoute1', (req, res) => {
  res.send('Hello, World!');
});

// Crie um servidor HTTPS com as credenciais e use o Express como handler
const httpsServer = https.createServer(credentials, app);

// Faça o servidor HTTPS escutar na porta desejada
httpsServer.listen(3000, () => {
  console.log('Express HTTPS server listening on port 3000');
});