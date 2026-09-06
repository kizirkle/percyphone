const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get the admin');
});

router.put('/', (req, res) => {
  res.send('Edit the admin');
});

module.exports = router;