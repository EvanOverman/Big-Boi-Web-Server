express = require('express');
path = require('path');
app = express();

app.get('/', (req, res) => {
res.redirect(path.join('/index.html'));
console.log('Got request for / ... ');
});

app.get('/css', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/css'));
console.log('Got request for /css ... ');
});

app.get('/downloads', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/downloads'));
console.log('Got request for /downloads ... ');
});

app.get('/index.html', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/index.html'));
console.log('Got request for /index.html ... ');
});

app.get('/js', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/js'));
console.log('Got request for /js ... ');
});

app.get('/pages', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/pages'));
console.log('Got request for /pages ... ');
});

app.get('/pictures', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/pictures'));
console.log('Got request for /pictures ... ');
});

app.get('/pictures/background.jpg', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/pictures/background.jpg'));
console.log('Got request for /pictures/background.jpg ... ');
});

app.get('/pictures/background.old.jpg', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/pictures/background.old.jpg'));
console.log('Got request for /pictures/background.old.jpg ... ');
});

app.get('/pictures/icon.png', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/pictures/icon.png'));
console.log('Got request for /pictures/icon.png ... ');
});

app.get('/css/stylesheet.css', (req, res) => {
res.sendFile(path.join(__dirname + '/organized/css/stylesheet.css'));
console.log('Got request for /css/stylesheet.css ... ');
});

app.get('/downloads/putty', (req, res) => {
res.download(path.join(__dirname + '/organized/downloads/putty'));
console.log('Got request for /downloads/putty ... ');
});

app.listen(80, console.log('Server listening on port 80'));