/* Express */
var path = require('path');
var express = require('express');
var router = express.Router();

/* MySql */

var { connect, query } = require('mysql')

var connection = require('../../config/config');

/* GET users listing. */
router.put('/', function(req, res, next) {
    
  // The updateable column.
  var NEW_DATA = {
    'phone_number': req.query.phone_number
  };
  var SEARCH_FOR = {
    'first_name': req.query.first_name
  };
  
  var QUERY = 'UPDATE `users` SET ? WHERE ?';

  connection.query(QUERY, [NEW_DATA, SEARCH_FOR], function (err, rows, fields) {
  
    if (err) throw err
  
    res.send(rows)

  })
  
});

module.exports = router;
