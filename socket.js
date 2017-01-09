const io = require('socket.io')(1337)

io.on('connection', socket => {
  console.log("socket connected")
})
