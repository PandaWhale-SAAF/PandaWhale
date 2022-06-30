const express = require('express');
const signUpController = require('../controllers/signUpController');
const path = require('path');

const router = express.Router();

router.post('/', signUpController.signUp, (req, res) => {
  res.status(200).json(res.locals.signUp);
});

module.exports = router;
