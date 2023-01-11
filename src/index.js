const http = require('http');
// const fs = require('fs'); // leer atchivos
// const path = require('path'); // trabaja conjuntamente con fs

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body>HOLA</body></html>');
  res.end();
});

server.listen(5000);
