const { exec } = require('child_process');
const { request } = require('http');
const { response } = require('express');

let server = require('express')();
let path = require('path');

server.get('/', (request, response) => {
    console.log('[i] Server got request for /');
    response.sendFile(path.join(__dirname + '/index.html'));
});

server.get('/style.css', (request, response) => {
    console.log('[i] Server got request for /style.css');
    response.sendFile(path.join(__dirname + '/style.css'));
});

server.listen(3000, console.log('[i] Server listening on port 3000'))