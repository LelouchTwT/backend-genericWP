const express = require('express');
var formidable = require('formidable');
var fs = require('fs');

module.exports = (server) => {
  const router = express.Router();
  server.use('/api', router);

  const wpService = require('../api/genericwp/wpService');
  wpService.register(router, '/main');

  server.post('/upload', (req, res) => {

    let form = new formidable.IncomingForm({
      uploadDir: './src/uploads',
      keepExtensions: true
    })

    form.parse(req, (err, fields, files) => {

      res.json({
        files
      })

    })

  })


}