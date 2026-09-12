const express = require('express');
const router = express.Router();

const productRoutes = require('./Product');
const tagRoutes = require('./Tag');
const adminRoutes = require('./Admin');
const taggedProductRoutes = require('./TaggedProduct');

router.use('/product', productRoutes);
router.use('/tag', tagRoutes);
router.use('/admin', adminRoutes);
router.use('/tagged_product', taggedProductRoutes);

module.exports = router;