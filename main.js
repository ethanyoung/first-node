console.log("Hello!");

var http = require('http');
var url = require('url');

var express = require('express')
var app = express();

app.get('/', function(req, res) {
  res.send('id: ' + req.query.id);
})

app.listen(3000);

/**
http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  var date = new Date();
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Hello, World ! \n" + date.getTime());
  res.end();
}).listen(8888, '127.0.0.1');
*/

console.log('access: http://localhost:3000');
