let express = require('express');
let path = require('path');

let server = express();


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Home.html'));
    console.log('[i] Server got request for / ...');
});

server.get('/Home.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Home.html'));
    console.log('[i] Server got request for /Home.html ...');
});

server.get('/Github.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Github.html'));
    console.log('[i] Server got request for /Github.html ...');
});

server.get('/MC Server.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/MC Server.html'));
    console.log('[i] Server got request for /MC Server.html ...');
});

server.get('/Primary Server.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Primary Server.html'));
    console.log('[i] Server got request for /Primary Server.html ...');
});

server.get('/Secondary Server.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Secondary Server.html'));
    console.log('[i] Server got request for /Secondary Server.html ...');
});



// Downloads

/*
server.get('/Downloads', (request, response) => {
    console.log('[i] Server got request for /Downloads');
    response.download(path.join(__dirname + '/pics/server-icon.jpg'));
});
*/


server.listen(3000, console.log('[i] Server listening on port 3000'))