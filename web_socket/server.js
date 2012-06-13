"use strict";
var sio = require('socket.io');

/**
 * Socket.IO server (single process only)
 */

var io, nicknames = {};

function start() {
  io = sio.listen(8808);
  io.sockets.on('connection', function(socket) {
    io.sockets.emit('connected', true);

    socket.on('message', function(message) {
      socket.broadcast.emit('message', message);
      socket.emit('message', message);
    });
    // socket.on('nickname', function(nick, fn) {
    // if (nicknames[nick]) {
    // fn(true);
    // } else {
    // fn(false);
    // nicknames[nick] = socket.nickname = nick;
    // socket.broadcast.emit('announcement', nick + ' connected');
    // io.sockets.emit('nicknames', nicknames);
    // }
    // });

    socket.on('disconnect', function() {
      // if (!socket.nickname)
      // return;
      // delete nicknames[socket.nickname];
      // socket.broadcast.emit('announcement', socket.nickname + ' disconnected');
      // socket.broadcast.emit('nicknames', nicknames);
    });
  });
}

exports.start = start;
