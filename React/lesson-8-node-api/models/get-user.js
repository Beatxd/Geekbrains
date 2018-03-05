module.exports = (id) => {
  return new Promise((resolve, reject) => {
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

    connection.query(`SELECT * FROM users WHERE id = ${id || 0}`, (err, results) => {
      if (err) console.log('get-user sql error:', err);
      connection.end();
      resolve(results);
    });
  })
};