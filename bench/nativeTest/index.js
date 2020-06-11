const http = require('http');

http.createServer((req, res) => {
	if (req.url === '/getroute1') return res.end('Hello');
}).listen(3000);
