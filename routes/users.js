var express = require('express');
var UserModel  = require('../modules/getUser.js');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
});
router.get('/user/:id', function(req, res, next) {

   UserModel.getUser(req.params.id,function(error, rows){
    res.json({ user: rows});
  });

});

router.post('/register/:id', function(req, res, next) {
  var data = req.body.user;
  var aux = JSON.parse(data);
  for(item in aux){
    console.log(item + " : " + aux[item]);
  }
  res.render('register', aux);
});

module.exports = router;
