const http = require('http');
// const fs = require('fs'); // leer atchivos
// const path = require('path'); // trabaja conjuntamente con fs

const PORT = 5000
const server = http.createServer((req, res) => {

  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body>HOLA</body></html>');
  } else if(req.url === '/info') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body>Info</body></html>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html><body>404. Not found</body></html>');
  }
  res.end();
});

server.listen(PORT);
