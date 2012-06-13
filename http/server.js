var http = require("http");
var url = require("url");

var router = require("./router");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    
    console.log("HTTP: Request for " + pathname + " received.");
    
    request.setEncoding("utf8");
    
    router.dispatch(pathname, request, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("HTTP: Server has started.");
}

exports.start = start;