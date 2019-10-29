const express = require('express');
const http = require('http');
const { join } = require('path');
const cookie = require('cookie-parser');
const router = require('./routes');
const connect = require('./database/config/db_connection');
const app = express();
const server = http.createServer(app);

connect();
app.use(express.json());
app.use(cookie());

app.use('/api/v1', router)
app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname), '..', 'client', 'build', 'index.html');
})



module.exports = server;
