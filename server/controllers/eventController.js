const {home} = require('nodemon/lib/utils');
const db = require('../models/databaseModel');
const router = require('../routes/homeRouter');
// const { response } = require('../server');

const eventController = {};
//sends event input from client to database
eventController.createEvent = (req, res, next) => {
  const data = req.body;
  console.log(data);
  //store the user input in array for parameterization
  const inputValues = [
    req.body.title,
    req.body.date,
    req.body.start_time,
    req.body.end_time,
    req.body.activity_type,
    req.body.num_participants,
    req.body.zip,
    req.body.location,
    req.body.created_by_id,
  ];
  //create query string
  const queryStrParamaterized = `INSERT INTO events (title, date, start_time, end_time, activity_type, num_participants, zip, location, created_by_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  //send query to add new row to event table
  db.query(queryStrParamaterized, inputValues)
    .then((res) => {
      //console.log(res);
      return next();
    })
    .catch((err) => {
      return next({
        //log: data,
        log: 'Error in create event middleware',
        status: 400,
        message: 'Please verify data input are correct type.',
      });
    });
};
module.exports = eventController;
