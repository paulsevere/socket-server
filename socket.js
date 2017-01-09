const io = require('socket.io')(1337)

io.on('connection', socket => {
  console.log("socket connected")
})
// now that server is running
// srv.listen(1337, '127.0.0.1', () => {
//
//   // make a request
//   var options = {
//     port: 1337,
//     hostname: '127.0.0.1',
//     headers: {
//       'Connection': 'Upgrade',
//       'Upgrade': 'websocket'
//     }
//   };
//
//   var req = http.request(options);
//   req.end();
//
//   req.on('upgrade', (res, socket, upgradeHead) => {
//     console.log('got upgraded!');
//     socket.end();
//     process.exit(0);
//   });
// });
