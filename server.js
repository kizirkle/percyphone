//imports
require('dotenv').config();
const express = require('express');

//setting up express
const app = express();
const api = require('./api');

//middleware
app.use(express.json());

app.use('/api', api);

module.exports = app;

