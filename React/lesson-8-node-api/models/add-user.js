module.exports = (body) => {
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

  const sql = `
    INSERT INTO users (name, age)
    VALUES ('${body.name}','${body.age}')`;

  connection.query(sql, (err) => {
    if (err) console.log('add-user sql error:', err);
  });
  connection.end();
};