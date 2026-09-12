const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

//create new taggedProduct
router.post('/', async(req, res) => {
    console.log('attempting...');

    try{
        console.log(req.body);
        var{
            tag_id,
            product_id
        } = req.body;

        const {data, error} = await supabase
        .schema('percyphone')
        .from('tagged_product')
        .insert({
            tag_id,
            product_id
        });
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
})

module.exports = router;