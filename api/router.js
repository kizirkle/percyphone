const express = require('express');
const router = express.Router();

//const productRoutes = require('./Product');
const tagRoutes = require('./Tag');
const adminRoutes = require('./Admin');

//app.use('/products', productRoutes);
router.use('/tag', tagRoutes);
router.use('/admin', adminRoutes);

module.exports = router;