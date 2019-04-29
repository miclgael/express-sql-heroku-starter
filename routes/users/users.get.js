/* Express */
var express = require('express');
var router = express.Router();
var path = require('path')
/* MySql */

var { connect, query } = require('mysql')
var connection = require('../../config/config');

var INITIAL_QUERY = 'SELECT * FROM `users` ORDER BY age ASC LIMIT 0,20';

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  connection.query(INITIAL_QUERY, function (err, rows, fields) {
  
    if (err) throw err
  
    res.send(rows);
  
  })
  
});

module.exports = router;
