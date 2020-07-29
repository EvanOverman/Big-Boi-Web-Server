const { exec } = require('child_process');
const { request, ServerResponse } = require('http');
const { response } = require('express');

let server = require('express')();
let path = require('path');

// Home page.
server.get('/', (request, response) => {
    console.log('[i] Server got request for /...');
    response.sendFile(path.join(__dirname + '/index.html'));
});

// Individual files, things like stylesheets and pictures.
server.get('/style.css', (request, response) => {
    console.log('\t[i] Server got request for /style.css');
    response.sendFile(path.join(__dirname + '/style.css'));
});

server.get('/pics/server-icon.jpg', (request, response) => {
    console.log('\t[i] Server got request for /pics/server-icon.jpg');
    response.sendFile(path.join(__dirname + '/pics/server-icon.jpg'));
});

server.get('/pics/screenshots/Screenshot1.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot1.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot1.png'));
});

server.get('/pics/screenshots/Screenshot2.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot2.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot2.png'));
});

server.get('/pics/screenshots/Screenshot3.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot3.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot3.png'));
});

server.get('/pics/screenshots/Screenshot4.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot4.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot4.png'));
});

server.get('/pics/screenshots/Screenshot5.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot5.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot5.png'));
});

server.get('/pics/screenshots/Screenshot6.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot6.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot6.png'));
});

server.get('/pics/screenshots/Screenshot7.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot7.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot7.png'));
});

server.get('/pics/screenshots/Screenshot8.png', (request, response) => {
    console.log('\t[i] Server got request for /pics/screenshots/Screenshot8.png');
    response.sendFile(path.join(__dirname + '/pics/screenshots/Screenshot8.png'));
});

// Downloads
/*
server.get('/Downloads', (request, response) => {
    console.log('[i] Server got request for /Downloads');
    response.download(path.join(__dirname + '/pics/server-icon.jpg'));
});
*/

// Minecraft server page.
server.get('/mc', (request, response) => {
    console.log('[i] Server got request for /mc...');
    response.sendFile(path.join(__dirname + '/pages/mc.html'));
});

server.get('/git', (request, response) => {
    console.log('[i] Server got request for /git...');
    response.sendFile(path.join(__dirname + '/pages/git.html'));
});

server.listen(3000, console.log('[i] Server listening on port 3000'))