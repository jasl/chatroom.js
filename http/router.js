var querystring = require("querystring");
var requestHandlers = require("./request_handlers");

var routes = {
  '/' : requestHandlers.index
};

function dispatch(pathname, request, response) {
  console.log("HTTP: [" + request.method + "] " + pathname);
  
  var params = querystring.parse(pathname)
  
  if (typeof routes[pathname] === 'function') {
    routes[pathname](request, response, params);
  } else {
    requestHandlers.serve_asset(response, pathname);
  }
}

exports.dispatch = dispatch;