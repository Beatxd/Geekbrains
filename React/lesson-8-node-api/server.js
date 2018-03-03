const express = require('express');
const fs = require('fs');

const ajax = require('./ajax');

const app = express();

app
  .get('/', (req, res) => {
    fs.readFile('./frontend/index.html', (err, html) => {
      if (err) throw err;
      res.set('Content-Type', 'text/html');
      res.send(html);
    });
  })
  // .post('/ajax', ajax)
  .listen(80);

console.log("server was start at http://localhost:80/");
