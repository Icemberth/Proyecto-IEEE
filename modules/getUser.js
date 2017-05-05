var db = require('../db.js');

var userModel = {};

userModel.getUser = function(id,callback){
    db.get().query('SELECT * FROM ieee.users', function (err, rows) {
    if(err){
        callback(null, null);
    }else{
        callback(null, rows);
    }
  });
}

module.exports = userModel;
