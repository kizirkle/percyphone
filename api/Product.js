const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

//get all products
router.get('/', async(req, res) => {
  try{
    console.log("reached the server...")
    const {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .select('*');

    console.log(data);

    if(error){
      throw error;
    }

    res.status(201).json({message: 'Success', data});
  } catch(error){
    res.status(500).json({error: error.message});
  }

});

//get specific product
router.get('/:id', async(req, res) => {
  try{
    var { id } = req.params
    console.log("reached the server...")
    const {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .eq("id", id)
    .select();

    console.log(data);

    if(error){
      throw error;
    }

    res.status(201).json({message: 'Success', data});
  } catch(error){
    res.status(500).json({error: error.message});
  }

});

//create new product
router.post('/', async (req, res) => {
  console.log("attempting...");
  try{
    //grab all variables from req.body
    console.log(req.body);
    var {
      name,
      description,
      price,
      image,
      stock,
      isClown
    } = req.body;

    //make sure that price and stock return as numbers
    price = Number(price);
    stock = Number(stock);

    //if required variables don't exist, don't let them submit
    if(!name ||
      !image ||
      typeof isClown !== 'boolean'){
      return res.status(400).json({error: 'you must fill out the form fully.'});
    }

    //query supabase
    const {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .insert({
      name,
      description,
      price,
      image,
      stock,
      isClown
    })
    .select()
    .single()


    //if the database didn't work, throw it
    if (error) {
      console.log(error);
      throw error;
    }
    //if not, send the data necessary
    res.status(201).json({ message: 'Success', data });

  } catch(error){
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//edit product
router.put('/', async (req, res) => {
  try{
    var{
      id,
      name,
      description,
      price,
      image,
      stock,
      isClown
    } = req.body;

    //make sure that price and stock return as numbers
    price = Number(price);
    stock = Number(stock);

    if(!id || !name || !image || typeof isClown !== 'boolean' ){
      return res.status(400).json({error: 'you must fill out the form fully.'});
    }

    const {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .upsert({
      "id":id,
      'name': name,
      'description': description,
      'price':price,
      'image': image,
      'stock': stock,
      'isClown': isClown
    });

    if (error) {
      console.log(error);
      throw error;
    }

    res.status(201).json({ message: 'Success', data });
  } catch(error){
    res.status(500).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  try{
    var{id} = req.body;

    var {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .delete()
    .eq('id', id)
    .select();

    if(error){
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