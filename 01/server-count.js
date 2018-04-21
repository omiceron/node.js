const {Server} = require('http');

let i = 0;

const server = new Server((req, res) => {
  i += 2;
  res.end(i.toString());
});

// server.on('myEvent', (v) => { // v === 1 });
//
// server.emit('myEvent', 1)
//
// module.exports = server;

server.listen(8000);
