"use strict"

function handle(socket) {
  var handler = new Handler(socket);
  for(var e in handler) {
    console.log(e);
    socket.on(e, handler[e]);
  }
}

var Handler = function(socket) {
  var self = this;
  var socket = socket;

  self.message = function(msg) {
    socket.broadcast.emit('message', msg);
    //socket.emit('message', msg);
  };
  self.disconnect =  function() {

  };
  
  return self;
};

exports.handle = handle;
