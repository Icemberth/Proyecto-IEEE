var express = require('express');
var getUser = require('../modules/getUser.js');
var router = express.Router();

/* GET users listing. */
router.get('/user/:id', function(req, res, next) {
  console.log(req.params.id);
   var currentUser = getUser("1000", function(other, rows){
      console.log("Información a listar : ", rows);
   });
   /*console.log(typeof currentUser);
   currentUser = JSON.stringify(currentUser);
   console.log(typeof currentUser);*/
   res.json({ user: currentUser});
});

module.exports = router;
