// ---- NPM Imports ----
require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

// ---- Express Server Setup ----
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

// ---- Express Server Endpoints ----
app.get('/', (req, res) => {
  res.json({ 'status': 'Server is running.' } );
});

app.get('/test_message', (req, res) => {
  res.json({ 'message': 'Hello World to the Everyone!' } );
});

console.log('Server running at http://127.0.0.1:80/')
app.listen(process.env.PORT || 80); // Create a .env to set env variables
