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

router.put('/', async (req, res) => {
  try{
    console.log("Made it to the server!");
    var {id, tagName, isSection} = req.body;
    console.log(id, tagName, isSection);
    if(!id || !tagName || typeof isSection !== 'boolean'){
      return res.status(400).json({error: 'you must fill out the form fully.'});
    }

    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .upsert({
      "id": id,
      "tagName": tagName,
      "isSection": isSection
    });

    console.log(data);

    if (error) {
      console.log(error);
      throw error;
    }

    res.status(201).json({ message: 'Success', data });
  }catch(error){
    res.status(500).json({ error: error.message });
  }

});

router.delete('/', async (req, res) => {
  try{
    console.log("Made it to the server");
    var{id} = req.body;
    console.log(id);
    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .delete()
    .eq("id",id)
    .select();

    if (error) {
      console.log(error);
      throw error;
    }

    console.log("Deleted:", data);

    return res.status(200).json({
      message: "Tag deleted successfully",
      data
    });

  }catch(error){
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;