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

//get all products

//get products by tags

//get products by genres

//create product

//edit product

//delete product

//get tags

//create tag

//edit tag

//delete tag

//get genres

//create genre

//edit genre

//delete genre

//login

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})