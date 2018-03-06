const express = require('express');
const fs = require('fs');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');

const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.text({type: 'text/html'}))
  .get('/', (req, res) => {
    const getUsers = require('./models/get-users');
    let promise = getUsers;
    promise.then(
      (users) => {
        fs.readFile('./frontend/index.html', (err, html) => {
          if (err) throw err;
          const $ = cheerio.load(html);
          users.forEach((user) => {
            $('.users-list').append(`
              <div>
                <h2>${user.name}</h2>
                <p>${user.age + ' years old'}</p>
                <a href="/users/edit/${user.id}">Edit</a>
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
  .get('/users/edit/*', (req, res) => {
    const userId = req.url.split('/').pop();
    const user = require('./models/get-user');
    let promise = user(userId);
    promise.then(
      user => {
        user = user[0] || [];
        fs.readFile('./frontend/html/edit-user.html', (err, html) => {
          if (err) throw err;
          const $ = cheerio.load(html);
          $('.user-edit-form__name').val(user.name || '');
          $('.user-edit-form__age').val(user.age || '');
          $('.user-edit-form__button').attr('user-id', user.id || 0);

          res.set('Content-Type', 'text/html');
          res.send($.html());
        });
      },
      err => {
        console.log(err)
      }
    );

  })
  .post('/users/edit/*', (req, res) => {
    if (!req.body) return res.sendStatus(400);
      require('./models/edit-user')(req.body);
  })
  .post('/users/add/', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    require('./models/add-user')(req.body);
  })
  .listen(80);

console.log("server was start at http://localhost:80/");
