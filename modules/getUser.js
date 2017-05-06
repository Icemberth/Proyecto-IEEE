var db = require('../db.js');

var userModel = {};

userModel.getUser = function(id,callback){
    db.get().query('SELECT * FROM ieee.users WHERE ieee.users.fbID = ? ', id , function (err, rows) {
    if(err){
        callback(err, null);
    }else{
        callback(null, rows);
    }
  });
}

module.exports = userModel;
