var db = require('../db.js');
var getUser = function (dbID, done) { // 1
        /*var connection = mysql.createConnection({
          host     : '127.0.0.1',
          user     : 'root',
          password : '',
          database : 'ieee'
        });

        connection.connect();

        connection.query('SELECT * FROM ieee.users', function (error, results, fields) {
          if (error) throw error;
          //console.log('The solution is: ', results);
          return results;
        });

        connection.end();
*/
  db.get().query('SELECT * FROM ieee.users', function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
    //return this;
}

module.exports = getUser;
