// *****THIS CONTROLS ALL PRODUCTS.*****
// PRODUCTS CAN BE CREATED, EDITED, AND DELETED

// *****WHAT CAN BE REQUESTED:*****
// ALL PRODUCTS, 
// PRODUCTS LESS THAN A MONTH OLD, 
// OR ONE SINGLE PRODUCT

// imports
const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

// GET all products
// returns an array of objects
router.get('/', async(req, res) => {
  try{
    //attempt to query supabase
    const {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .select('*');

    //if attempt failed, return why it failed.
    if(error){
      throw error;
    }

    //if attempt succeeds, return the data and a message.
    res.status(201).json({message: 'Success', data});
  } catch(error){
    res.status(500).json({error: error.message});
  }

});

// GET new products
// returns products less than one month old.
router.get('/new', async (req, res) => {
  //create a Date() object for one month ago. 
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  try{
    //attempt to query supabase
    const {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .select('*')
    .gte('created_at', oneMonthAgo.toISOString());

    //if query failed, return why it failed
    if(error){
      throw error;
    }
    //if query succeeds, return data
    res.status(201).json({message: 'Success', data});
  }catch(error){
    res.status(500).json({error: error.message});
  }
})

// GET specific product by id
// returns one product with a matching id to the URL.
router.get('/:id', async(req, res) => {
  try{
    //takes the id from the parameter of the url.
    var { id } = req.params
    //attempt to query supabase
    const {data, error} = await supabase
    .schema('percyphone')
    .from('product')
    .select()
    .eq("id", id)
    .single();

    //if query failed, return why
    if(error){
      throw error;
    }

    //if query succeeded, return data
    res.status(201).json({message: 'Success', data});
  } catch(error){
    res.status(500).json({error: error.message});
  }

});

// CREATE new product
// accepts a name, description, price, thumbnail image,
// stock, isClown, and an array of images.
// returns a created product.
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
      isClown,
      images
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
      isClown,
      images
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

// EDIT product
// accepts an id, name, description, price, thumbnail image,
// stock, isClown, and an array of images.
// returns an edited product.
router.put('/', async (req, res) => {
  try{
    var{
      id,
      name,
      description,
      price,
      image,
      stock,
      isClown,
      images
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
      'isClown': isClown,
      'images': images
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

//delete product
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
      message: "Product deleted successfully",
      data
    });

  }catch(error){
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;