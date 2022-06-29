//const db = require('../models/databaseModel');

const loginController = {};

loginController.postLogin = (req, res, next) => {
  const {username, password} = req.body;

  if (!username || !password) {
    res.locals.loggedIn = 'False';
    return next();
  } else {
    // check database
  }

  console.log(username, password);
  return next();
};

module.exports = loginController;
