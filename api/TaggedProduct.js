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

//return all products by their tag
router.post('/tag', async (req, res) => {
    try{
        var {tag_id, isClown} = req.body;
        const {data, error} = await supabase
        .schema('percyphone')
        .from('tagged_product')
        .select("*")
        .eq("tag_id", tag_id);
        //if the database didn't work, throw it
        if (error) {
        console.log(error);
        throw error;
        }

        const productIds = data.map((item) => item.product_id);
        if(isClown){
            const {data: productData, error: productError} = await supabase
            .schema('percyphone')
            .from('product')
            .select('*')
            .eq("isClown", true)
            .in("id", productIds);
            
            if (productError) {
                console.log(productError);
                throw productError;
            }
            //if not, send the data necessary
            res.status(201).json({ message: 'Success', productData });

        } else{
            const {data: productData, error: productError} = await supabase
            .schema('percyphone')
            .from('product')
            .select('*')
            .eq("isClown", false)
            .in("id", productIds)

            if (productError) {
                console.log(productError);
                throw productError;
            }
            //if not, send the data necessary
            res.status(201).json({ message: 'Success', productData });

        }
        

        
    } catch(error){
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})
//return all tags by a product
router.post('/product', async (req, res) => {
    try{
        var {product_id} = req.body;
        const {data, error} = await supabase
        .schema('percyphone')
        .from('tagged_product')
        .select("*")
        .eq("product_id", product_id);
        //if the database didn't work, throw it
        if (error) {
        console.log(error);
        throw error;
        }

        const tagIds = data.map((item) => item.tag_id);

        const {data: tagData, error: tagError} = await supabase
        .schema('percyphone')
        .from('tag')
        .select('*')
        .in("id", tagIds)

        if (tagError) {
        console.log(tagError);
        throw tagError;
        }
        //if not, send the data necessary
        res.status(201).json({ message: 'Success', tagData });

    } catch(error){
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

//delete taggedProduct
router.delete('/', async (req, res) =>{
    try{
        var {product_id, tag_id} = req.body;
        const {data, error} = await supabase
        .schema('percyphone')
        .from('tagged_product')
        .delete()
        .eq('tag_id', tag_id)
        .eq('product_id', product_id)
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
})
module.exports = router;