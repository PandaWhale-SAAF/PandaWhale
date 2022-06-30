const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 3000;

const homeRouter = require('./routes/homeRouter');
const createEventRouter = require('./routes/createEventRouter');
const signUpRouter = require('./routes/signUpRouter');
const loginRouter = require('./routes/loginRouter');

app.use(cors());
app.use(express.json());

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
//app.use(express.static(path.resolve(__dirname, '../client/images')));

app.use('/signup/api', signUpRouter);
app.use('/login/api', loginRouter);
app.use('/home', homeRouter);
app.use('/createEvent', createEventRouter);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '../index.html');
//   // console.log(req.body);
//   // res.send({key: 'It worked!'});
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page does not exist.'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//app.listen(PORT, console.log(`listening on port ${PORT}...`));

//module.exports = app;

module.exports = app.listen(PORT, console.log(`listening on port ${PORT}...`));