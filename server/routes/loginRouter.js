const express = require('express');
const path = require('path');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/', loginController.postLogin, (req, res) => {
  res.status(200).json(res.locals.loggedIn);
});

module.exports = router;
