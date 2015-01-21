'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var port = process.env.PORT || 8888;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(bodyParser())
  .get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  })
  .use(express.static(__dirname + '/public'))