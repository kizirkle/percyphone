const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all genres');
});

router.post('/', (req, res) => {
  res.send('Create a genre');
});

router.put('/', (req, res) => {
  res.send('edit a genre');
});

router.delete('/', (req, res) => {
  res.send('delete a genre');
});

module.exports = router;