var express = require('express');
var UserModel  = require('../modules/getUser.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  UserModel.getUser("1000",function(error, data){
      console.log(data);
      console.log(JSON.stringify(data));
    res.render('home', { usuario: JSON.stringify(data)});
  });
});

module.exports = router;
