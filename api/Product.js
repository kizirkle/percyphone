const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all products');
});

router.post('/', (req, res) => {
  res.send('Get productbytag');
});

router.post('/', (req, res) => {
  res.send('Get productbygenre');
});

router.post('/', (req, res) => {
  res.send('Create a product');
});

router.put('/', (req, res) => {
  res.send('edit a product');
});

router.delete('/', (req, res) => {
  res.send('delete a product');
});

module.exports = router;