var express = require('express');
var UserModel  = require('../modules/getUser.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  UserModel.getUser("2147483647",function(error, data){
    data = JSON.stringify(data);
      var aux = JSON.parse(data);
    console.log(aux);
    res.render('home', { usuario: data});
  });
});

module.exports = router;
