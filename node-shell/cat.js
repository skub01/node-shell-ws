const fs = require('fs');

module.exports = function cat(fileName, done) {
        fs.readFile(fileName, {encoding: 'utf8'}, (err, data) => {
          if (err) {
            done('Something went wrong!')
          } else {
          done(data);}
        });
      }



