const db = require('../models/databaseModel');

const loginController = {};

loginController.postLogin = function (req, res, next) {
  const {username, password} = req.body;

  if (!username || !password) {
    res.locals.loggedIn = 'False';
    return next();
  } else {
    // check database
    res.locals.loggedIn = 'True';
  }

  return next();
};

module.exports = loginController;
