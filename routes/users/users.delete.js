/* Express */
var path = require('path');
var express = require('express');
var router = express.Router();

/* MySql */

var { connect, query } = require('mysql')

var connection = require('../../config/config');

/* GET users listing. */
router.delete('/', function(req, res, next) {
    
  // The updateable column.
  var TO_DELETE = {
    'first_name': req.query.first_name
  };
  
  /* DELETE FROM [table] WHERE [column] = [value]; */
  var QUERY = 'DELETE FROM `users` WHERE ?';

  connection.query(QUERY, TO_DELETE, function (err, rows, fields) {
  
    if (err) throw err
  
    res.send(rows)

  })
  
});

module.exports = router;
