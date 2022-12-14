const http = require('http')

const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.write("<html><body>HOLA</body></html>")
  res.end();
})

server.listen(5000)
