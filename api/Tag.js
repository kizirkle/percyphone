const express = require('express');
const supabase = require('../db/supabase');
const router = express.Router();

//get all tags
router.get('/', async (req, res) => {
  try{
    //query supabase for every tag
    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .select('*');

    //if supabase threw an error, throw the same error
    if (error) {
      throw error;
    }

    //if not, return the data
    res.status(201).json({ message: 'Success', data });

  } catch(error){
    res.status(500).json({ error: error.message });
  }
});

//get all section tags
router.get('/sections', async (req, res) => {
  try{
    console.log("Made it to the server");
    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .select()
    .eq("isSection", true);

    if (error) {
      console.log(error);
      throw error;
    }

    console.log("grabbed", data);

    return res.status(200).json({
      message: "Tags retrieved successfully",
      data
    });

  }catch(error){
    console.error("ERROR GETTING SECTIONS:", error);

    res.status(500).json({
        error: error.message
    });
  }
});

//create new tag
router.post('/', async (req, res) => {
  try{
    //grab tagName and isSection from req.body
    var {tagName, isSection} = req.body;
    //if required variables aren't present, don't
    //let it query the database
    if(!tagName || typeof isSection !== 'boolean'){
      return res.status(400).json({error: 'you must fill out the form fully.'});
    }

    //query the database
    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .insert(req.body);

    //if database threw an error, throw the same error
    if (error) {
      throw error;
    }

    //if not, return data
    res.status(201).json({ message: 'Success', data });
  } catch(error){
    res.status(500).json({ error: error.message });
  }
});

//edit tag
router.put('/', async (req, res) => {
  try{

    var {id, tagName, isSection} = req.body;

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

    if (error) {
      console.log(error);
      throw error;
    }

    res.status(201).json({ message: 'Success', data });
  }catch(error){
    res.status(500).json({ error: error.message });
  }

});

//delete tag
router.delete('/', async (req, res) => {
  try{

    var{id} = req.body;

    const {data, error} = await supabase
    .schema('percyphone')
    .from('tag')
    .delete()
    .eq("id",id)
    .select();

    if (error) {
      throw error;
    }

    return res.status(200).json({
      message: "Tag deleted successfully",
      data
    });

  }catch(error){
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;