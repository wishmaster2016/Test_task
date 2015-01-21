'use strict';
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8888;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
