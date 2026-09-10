const express = require('express');
const supabase = require('../db/supabase');
const router = express.Router();

router.get('/', async (req, res) => {
  try{
    console.log("reached backend")
    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .select('*');

    if (error) {
      throw error;
    }
    console.log(data);
    res.status(201).json({ message: 'Success', data });

  } catch(error){
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try{
    console.log("made it to server");
    var {tagName, isSection} = req.body;
    console.log(tagName, isSection);
    if(!tagName || typeof isSection !== 'boolean'){
      return res.status(400).json({error: 'you must fill out the form fully.'});
    }

    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .insert(req.body);

    console.log(data);

    if (error) {
      console.log(error);
      throw error;
    }
    res.status(201).json({ message: 'Success', data });
  } catch(error){
    res.status(500).json({ error: error.message });
  }
});

router.put('/', (req, res) => {
  res.send('edit a tag');
});

router.delete('/', (req, res) => {
  res.send('delete a tag');
});

module.exports = router;