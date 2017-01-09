const http = require('http')
const fs = require('fs')
let server = http.createServer(function(req, res) {
  res.end(fs.readFileSync('./index.html'), 'utf-8');
})
server.listen(6969);
