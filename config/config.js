var mysql = require('mysql');
module.exports = connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);