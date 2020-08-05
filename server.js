let express = require('express');
let path = require('path');

let server = express();

// Make pages accessable.

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

server.get('/MC%20Server.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/MC Server.html'));
    console.log('[i] Server got request for /MC Server.html ...');
});

server.get('/Primary%20Server.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Primary Server.html'));
    console.log('[i] Server got request for /Primary Server.html ...');
});

server.get('/Secondary%20Server.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Secondary Server.html'));
    console.log('[i] Server got request for /Secondary Server.html ...');
});

// Make images accessable.

// Home

server.get('/Home/a3f3c36821471f564d06f0c985666950.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Home/a3f3c36821471f564d06f0c985666950.jpg'));
    console.log('\t[i] Server got request for /Home/a3f3c36821471f564d06f0c985666950.jpg ...');
});

server.get('/Home/030dc238f48d86ded7b408e2f7a6f1be.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Home/030dc238f48d86ded7b408e2f7a6f1be.jpg'));
    console.log('\t[i] Server got request for /Home/030dc238f48d86ded7b408e2f7a6f1be.jpg ...');
});

server.get('/Home/2ff1c6cf5cbac5c61137e031eba10930.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Home/2ff1c6cf5cbac5c61137e031eba10930.jpg'));
    console.log('\t[i] Server got request for /Home/2ff1c6cf5cbac5c61137e031eba10930.jpg ...');
});

// Github

server.get('/Github/d3c7bc0ae9d762f3d397fee2af89a3fa.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Github/d3c7bc0ae9d762f3d397fee2af89a3fa.jpg'));
    console.log('\t[i] Server got request for /Github/d3c7bc0ae9d762f3d397fee2af89a3fa.jpg ...');
});

server.get('/Github/0d43241299e499aab27dc46f20f34256.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Github/0d43241299e499aab27dc46f20f34256.jpg'));
    console.log('\t[i] Server got request for /Github/0d43241299e499aab27dc46f20f34256.jpg ...');
});

// MC Server

server.get('/MC%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/MC Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg'));
    console.log('\t[i] Server got request for /MC%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg ...');
});

server.get('/MC%20Server/1432709913880345cda7289e67cfeaa1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/MC Server/1432709913880345cda7289e67cfeaa1.jpg'));
    console.log('\t[i] Server got request for /MC%20Server/1432709913880345cda7289e67cfeaa1.jpg ...');
});

server.get('/MC%20Server/2854d6063a43e579b0059d0c756493e1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/MC Server/2854d6063a43e579b0059d0c756493e1.jpg'));
    console.log('\t[i] Server got request for /MC%20Server/2854d6063a43e579b0059d0c756493e1.jpg ...');
});

server.get('/MC%20Server/970c9f5b80bd5be9b15fdfc0e9c8e3c7.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/MC Server/970c9f5b80bd5be9b15fdfc0e9c8e3c7.jpg'));
    console.log('\t[i] Server got request for /MC%20Server/970c9f5b80bd5be9b15fdfc0e9c8e3c7.jpg ...');
});

// Primary Server

server.get('/Primary%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Primary Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg'));
    console.log('\t[i] Server got request for /Primary%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg ...');
});

server.get('/Primary%20Server/343888cb37d8c00dcc6fbae51f43501d.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Primary Server/343888cb37d8c00dcc6fbae51f43501d.jpg'));
    console.log('\t[i] Server got request for /Primary%20Server/343888cb37d8c00dcc6fbae51f43501d.jpg ...');
});

server.get('/Primary%20Server/b1d76b918d251f56c109fedcbe642d29.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Primary Server/b1d76b918d251f56c109fedcbe642d29.jpg'));
    console.log('\t[i] Server got request for /Primary%20Server/b1d76b918d251f56c109fedcbe642d29.jpg ...');
});

// Secondary Server

server.get('/Secondary%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Secondary Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg'));
    console.log('\t[i] Server got request for /Secondary%20Server/c53a37ec0a1ffca0ff6027ab5e029bb4.jpg ...');
});

server.get('/Secondary%20Server/343888cb37d8c00dcc6fbae51f43501d.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Secondary Server/343888cb37d8c00dcc6fbae51f43501d.jpg'));
    console.log('\t[i] Server got request for /Secondary%20Server/343888cb37d8c00dcc6fbae51f43501d.jpg ...');
});

server.get('/Secondary%20Server/c204a82df2afcf8f362b3b836321afb1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/Secondary Server/c204a82df2afcf8f362b3b836321afb1.jpg'));
    console.log('\t[i] Server got request for /Secondary%20Server/c204a82df2afcf8f362b3b836321afb1.jpg ...');
});

// Rick Rolls

server.get('/753', (req, res) => {
 res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
 console.log('[!] SOMEONE JUST GOT RICK ROLLED BOIS!!!');
});

// Downloads

/*
server.get('/Downloads', (request, response) => {
    console.log('[i] Server got request for /Downloads');
    response.download(path.join(__dirname + '/pics/server-icon.jpg'));
});
*/


server.listen(3000, console.log('[i] Server listening on port 3000'))