const express = require('express');
const path = require('path');
const loginController = '../controllers/loginController';

const router = express.Router();

router.post('/', (req, res) => {
  res.status(200).json('Success');
});

module.exports = router;
