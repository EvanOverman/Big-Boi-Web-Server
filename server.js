const { exec } = require('child_process');
const { request, ServerResponse } = require('https');
const { response } = require('express');

let server = require('express')();
let path = require('path');

// Home page.
server.get('/', (request, response) => {
    console.log('[i] Server got request for /...');
    response.sendFile(path.join(__dirname + '/pages/Home.html'));
});

server.get('/Home.html', (request, response) => {
    console.log('[i] Server got request for /...');
    response.sendFile(path.join(__dirname + '/pages/Home.html'));
});

server.get('/Github.html', (request, response) => {
    console.log('[i] Server got request for /Github.html...');
    response.sendFile(path.join(__dirname + '/pages/Github.html'));
});

server.get('/MC%20Server.html', (request, response) => {
    console.log('[i] Server got request for /...');
    response.sendFile(path.join(__dirname + '/pages/MC Server.html'));
});

server.get('/MC%20Server/1432709913880345cda7289e67cfeaa1.jpg', (request, response) => {
    console.log('[i] Server got request for /MC%20Server/1432709913880345cda7289e67cfeaa1.jpg...');
    response.sendFile(path.join(__dirname + '/pages/MC Server/1432709913880345cda7289e67cfeaa1.jpg'));
});

server.get('/MC%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg', (request, response) => {
    console.log('[i] Server got request for /MC%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg...');
    response.sendFile(path.join(__dirname + '/pages/MC Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg'))
});

server.get('/Home/0697e5697645bd89d6acbe8cb3f36c5c.jpg', (request, response) => {
    console.log('[i] Server got request for /Home/0697e5697645bd89d6acbe8cb3f36c5c.jpg...');
    response.sendFile(path.join(__dirname + '/pages/Home/0697e5697645bd89d6acbe8cb3f36c5c.jpg'))
});

server.get('/Home/a3f3c36821471f564d06f0c985666950.jpg', (request, response) => {
    console.log('[i] Server got request for /Home/a3f3c36821471f564d06f0c985666950.jpg...');
    response.sendFile(path.join(__dirname + '/pages/Home/a3f3c36821471f564d06f0c985666950.jpg'))
});

server.get('/Github/0d43241299e499aab27dc46f20f34256.jpg', (request, response) => {
    console.log('[i] Server got request for /Github/0d43241299e499aab27dc46f20f34256.jpg...');
    response.sendFile(path.join(__dirname + '/pages/Github/0d43241299e499aab27dc46f20f34256.jpg'))
});

server.get('/Github/d3c7bc0ae9d762f3d397fee2af89a3fa.jpg', (request, response) => {
    console.log('[i] Server got request for /Github/d3c7bc0ae9d762f3d397fee2af89a3fa.jpg...');
    response.sendFile(path.join(__dirname + '/pages/Github/d3c7bc0ae9d762f3d397fee2af89a3fa.jpg'))
});


// Downloads
/*
server.get('/Downloads', (request, response) => {
    console.log('[i] Server got request for /Downloads');
    response.download(path.join(__dirname + '/pics/server-icon.jpg'));
});
*/


server.listen(3000, console.log('[i] Server listening on port 3000'))