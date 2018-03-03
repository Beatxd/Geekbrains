const express = require('express');


const app = express();

app
  .get('/', (req, res) => {
  res.send(`
  <a href='/users'>Получить пользователей</a>
  `);
})
  .listen(80);

console.log("server was start at http://localhost:80/");
