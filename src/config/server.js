const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
/* const path = require('path');
const fs = require('fs'); */

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, () => {
  console.log(`Server BACKEND running on port: ${port}.`);
})

module.exports = server;