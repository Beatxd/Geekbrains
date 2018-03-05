module.exports = new Promise((resolve, reject) => {
  const mysql = require('mysql');

  const cfg = require('../cfg');

  const connection = mysql.createConnection({
    host: cfg.dbHost,
    port: cfg.dbPort,
    user: cfg.dbUser,
    password: cfg.dbPass,
    database: cfg.dbName
  });

  connection.connect();

  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw reject(err);
    connection.end();
    resolve(results);
  });
});