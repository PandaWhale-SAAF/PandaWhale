const express = require('express');
const eventController = require('../controllers/eventController')
const path = require('path');

const router = express.Router();

router.post('/', eventController.createEvent, (req, res) => {
    return res.status(200).send('created event');
})
  

module.exports = router;