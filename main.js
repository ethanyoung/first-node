console.log("Hello!");

var http = require('http');
var url = require('url');

var express = require('express')
var app = express();

app.get('/', function(req, res) {
  res.send('id: ' + req.query.id);
})

app.listen(8080);

console.log('access: http://localhost:8080');
