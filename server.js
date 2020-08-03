const { exec } = require('child_process');
const { request, ServerResponse } = require('https');
const { response } = require('express');

let vhost = require("vhost");
let path = require('path');
const express = require('express');
let server = express();
let www = express()

www.use(
    vhost("www.*", function handle(request, response, next) {
        console.dir(request.vhost.host);
        console.dir(request.vhost.hostname);
        console.dir(request.vhost.length);
        console.dir(request.vhost[0]);
        response.send(request.vhost.host);
    })
);

www.use(
    vhost("pro.*", function handle(req, res, next) {
        response.send(request.vhost.host);
    })
);

www.use(vhost("server.*", server));

www.get('/', (request, response) => {
    response.send('yeet');
});

// Downloads
/*
server.get('/Downloads', (request, response) => {
    console.log('[i] Server got request for /Downloads');
    response.download(path.join(__dirname + '/pics/server-icon.jpg'));
});
*/


server.listen(3000, console.log('[i] Server listening on port 3000'))