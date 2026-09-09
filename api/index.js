const express = require('express');
const router = express.Router();

//const productRoutes = require('./Product');
//const tagRoutes = require('./Tag');
const adminRoutes = require('./Admin');

//app.use('/products', productRoutes);
//app.use('/tags', tagRoutes);
router.use('/admin', adminRoutes);

module.exports = router;