const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all tags');
});

router.post('/', (req, res) => {
  res.send('Create a tag');
});

router.put('/', (req, res) => {
  res.send('edit a tag');
});

router.delete('/', (req, res) => {
  res.send('delete a tag');
});

module.exports = router;