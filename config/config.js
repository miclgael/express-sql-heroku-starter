var mysql = require('mysql');
module.exports = connection = mysql.createConnection(ENV['S3_KCLEARDB_DATABASE_URLEY']);