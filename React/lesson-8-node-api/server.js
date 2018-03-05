const express = require('express');
const fs = require('fs');
const cheerio = require('cheerio');

const app = express();

app
  .get('/', (req, res) => {
    const getUsers = require('./models/get-users');
    let promise = getUsers;
    promise.then(
      (users) => {
        console.log(users);
        fs.readFile('./frontend/index.html', (err, html) => {
          if (err) throw err;
          const $ = cheerio.load(html);
          users.forEach((user) => {
            $('.users-list').append(`
              <div user-id=${user.id}>
                <h2>${user.name}</h2>
                <p>${user.age + ' years old'}</p>
                <input type="button" value="edit">
              </div>
            `)
          });

          res.set('Content-Type', 'text/html');
          res.send($.html());
        });
      },
      error => console.log(error)
    );


  })
  // .post('/ajax', ajax)
  .listen(80);

console.log("server was start at http://localhost:80/");
