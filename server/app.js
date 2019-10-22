const express = require('express');
const http = require('http');
const { join } = require('path');
const app = express();
const cookie = require('cookie-parser');
const server = http.createServer(app);

app.use(express.json());
app.use(cookie());

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname), '..', 'client', 'build', 'index.html');
})



module.exports = server;
