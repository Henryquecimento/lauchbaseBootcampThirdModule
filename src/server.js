const express = require('express');
const nunjucks = require('nunjucks');
const routers = require('./routes');

const server = express();

server.use(express.static('public'));
server.use(routers);

server.set('view engine', 'njk');

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true,
});

server.listen(6000, function () {
    console.log('Server is running normally');
});
