const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const {Server} = require('socket.io')

const app = express();
const server = createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});
// connection Established
io.on('connection', (socket)=> {

  console.log("Connection Established");

  // Established
  socket.on('chat message', (msg)=> {
    console.log('recieved message', msg);
    io.emit('myMessage', msg); // server to client;
  })

  socket.on('disconnect', ()=> {
    console.log("disconnect")
  })
})


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

