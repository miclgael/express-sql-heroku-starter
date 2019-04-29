/* Express */
var path = require('path');
var express = require('express');
var router = express.Router();

/* MySql */

var { connect, query } = require('mysql')

var connection = require('../../config/config');

/* GET users listing. */
router.post('/', function(req, res, next) {
    
  var POST_DATA = {
    'age' : req.query.age,
    'first_name': req.query.first_name,
    'last_name': req.query.last_name,
    'phone_number': req.query.phone_number
  };

  var INITIAL_QUERY = 'INSERT INTO `users` SET ?';
  
  connection.query(INITIAL_QUERY, POST_DATA, function (err, rows, fields) {
  
    if (err) throw err
  
    res.send(rows)

  })
  
});

module.exports = router;
