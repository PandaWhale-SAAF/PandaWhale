// const db = require('../models/databaseModel');
const signUpcontroller = {};

signUpcontroller.signUp = function (req, res, next) {
  const {username, password, firstName, lastName, email} = req.body;

  if (username && password && firstName && lastName && email) {
    res.locals.signUp = 'Success';
  } else {
    res.locals.signUp = 'fail';
  }
  return next();
};

module.exports = signUpcontroller;
