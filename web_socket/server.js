"use strict";

var sio = require('socket.io');
//var router = require('./router');
var handle = require("./handlers").handle;
/**
 * Socket.IO server (single process only)
 */

var io = null;

function start() {
  io = sio.listen(8889);

  io.sockets.on('connection', function(socket) {
    handle(socket);
    
    socket.emit('connected', true);
  });
  
  exports.io = io;
}

exports.start = start;
