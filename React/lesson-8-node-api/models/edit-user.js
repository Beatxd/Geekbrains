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
    UPDATE users 
    SET name = '${body.name}', age = '${body.age}'
    WHERE id = ${body.id}`;

  connection.query(sql, (err) => {
    if (err) console.log('edit-user sql error:', err);
  });
  connection.end();
};