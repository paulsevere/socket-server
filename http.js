const http = require('http')
const fs = require('fs')

export default function() {
  let server = http.createServer(function(req, res) {
    res.end(fs.readFileSync('./index.html'), 'utf-8');
  })
  server.listen(7165);

}
