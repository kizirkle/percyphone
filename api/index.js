//THIS IS THE SERVER FILE. THIS INITIALIZES THE EXPRESS SERVER.
//imports
require('dotenv').config();
const express = require('express');

//setting up express
const app = express();
const api = require('./router');

//middleware. /api goes to the api route.
app.use(express.json());
app.use('/api', api);

//export the app
module.exports = app;

