const express = require('express');
const app = express();

//const productRoutes = require('./Product');
//const tagRoutes = require('./Tag');
const adminRoutes = require('./Admin');

app.use(express.json());

//app.use('/products', productRoutes);
//app.use('/tags', tagRoutes);
app.use('/admin', adminRoutes);

module.exports = require('../server');