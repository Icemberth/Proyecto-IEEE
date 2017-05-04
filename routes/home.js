var express = require('express');
var getUser = require('../modules/getUser.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var currentUser = getUser("1000");
  console.log(currentUser);
  res.render('home');
});

module.exports = router;
