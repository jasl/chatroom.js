var fs = require("fs");

var mime = {
  'html' : 'text/html',
  'png' : 'image/png',
  'jpg' : 'image/jpeg',
  'jpeg' : 'image/jpeg',
  'gif' : 'image/gif',
  'js' : 'application/x-javascript',
  'css' : 'text/css'
};
var current_root = './http/';

function index(request, response, params) {
  console.log("HTTP: Request handler 'index' was called.");
  fs.readFile( current_root + "views/index.html", function(error, file) {
    if (error) {
      response.writeHead(500, {
        "Content-Type" : "text/plain"
      });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {
        "Content-Type" : "text/html"
      });
      response.write(file);
      response.end();
    }
  });
}

function serve_asset(response, assetsName) {
  console.log("HTTP: Load asset " + assetsName);
  var type = assetsName.substr(assetsName.lastIndexOf('.') + 1);
  fs.readFile(current_root + 'assets' + assetsName, function(error, file) {
    if (error) {
      response.writeHead(500, {
        "Content-Type" : "text/plain"
      });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {
        "Content-Type" : mime[type]
      });
      response.write(file);
      response.end();
    }
  });
}

exports.index = index;
exports.serve_asset = serve_asset;
