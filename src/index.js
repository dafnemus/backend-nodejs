const http = require('http');
const url = require('url');
const phone = require('phone');
// const fs = require('fs'); // leer atchivos
// const path = require('path'); // trabaja conjuntamente con fs

const PORT = 5000;
const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  const path = urlData.pathname;
  const query = urlData.query;

  switch (path) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html><body>HOLA</body></html>');
    case '/info':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html><body>Info</body></html>');
    case '/phone':
      try {
        const phoneNumber = phone(query.value, query.country);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(phoneNumber));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.write(`<html><body>Error: ${error.message}</body></html>`);
      }
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<html><body>404. Not found</body></html>');
  }
  res.end();
});

server.listen(PORT);
