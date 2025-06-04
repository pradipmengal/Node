const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, welcome to Webapp hosted using Jenkins..!\n');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
