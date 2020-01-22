var mysql = require('mysql');
module.exports = connection = mysql.createConnection(
  process.env.YOUR_DEPLOYMENT_DB_VARIABLE
);