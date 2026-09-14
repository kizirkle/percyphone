//THIS CONTROLS WHERE EACH API ROUTE GOES.
//imports
const express = require('express');
const router = express.Router();
//routes
const productRoutes = require('./Product');
const tagRoutes = require('./Tag');
const adminRoutes = require('./Admin');
const taggedProductRoutes = require('./TaggedProduct');
//use middleware to connect /routes to /api
router.use('/product', productRoutes);
router.use('/tag', tagRoutes);
router.use('/admin', adminRoutes);
router.use('/tagged_product', taggedProductRoutes);
//export routes
module.exports = router;