const router = require('express').Router();

//const productRoutes = require('./Product');
//const tagRoutes = require('./Tag');
const adminRoutes = require('./Admin');

//router.use('/products', productRoutes);
//router.use('/tags', tagRoutes);
router.use('/admin', adminRoutes);

module.exports = router;