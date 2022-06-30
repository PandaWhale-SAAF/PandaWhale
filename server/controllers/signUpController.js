const db = require('../models/databaseModel');
const signUpcontroller = {};
const bcrypt = require('bcrypt');

signUpcontroller.signUp = function (req, res, next) {
  const {username, password, firstname, lastname, email, zip} = req.body;

  const available = `SELECT username
  FROM user_login
  WHERE username = $1`;

  const userlogin = `INSERT INTO user_login (username, password)
  VALUES ($1, $2)
  RETURNING id`;

  const usersQuery = `INSERT INTO users (id, first_name, last_name, zip, email)
  VALUES ($1, $2, $3, $4, $5)`;

  if (username && password && firstname && lastname && email && zip) {
    res.locals.signUp = 'Success';
    db.query(available, [username]).then(async (result) => {
      if (result.rows.length === 0) {
        // do password conversion here
        const salt = await bcrypt.genSalt();
        const securePassword = await bcrypt.hash(password, salt);
        db.query(userlogin, [username, securePassword]).then((results) => {
          res.locals.signUp = results.rows[0].id;
          db.query(
            usersQuery,
            [res.locals.signUp, firstname, lastname, zip, email],
            (err, result) => {
              if (err) {
                console.log(err);
                return next(err);
              }
              return next();
            }
          );
        });
      }
    });
  } else {
    res.locals.signUp = 'Rejected';
    return next();
  }
};

module.exports = signUpcontroller;

// .then((users) => {
//   res.locals.signUp = users.row[0].id;
//   console.log(res.locals.signUp);
//
//     .then((good) => {
//       return next();
//     })
//     .catch((error) => {
//       console.log(
//         'error in signUpController - insert into users table'
//       );
//       next(error);
//     });
// })
// .catch((error) => {
//   console.log('error in signUpController');
//   next(error);
// });
