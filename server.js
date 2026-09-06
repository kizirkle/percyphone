//imports
require('dotenv').config();
const express = require('express');
const {Pool} = require('pg');

//setting up express
const app = express();
const productRoutes = require('./routes/Product');
const genreRoutes = require('./routes/Genre');
const tagRoutes = require('./routes/Tag');
const adminRoutes = require('./routes/Admin');

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

//making the session
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use('/api/products', productRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;

