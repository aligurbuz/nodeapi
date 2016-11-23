var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/socketio', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(2233, function(){
  console.log('listening for socket io on *:3000');
});
