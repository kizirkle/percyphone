const express = require('express');
const router = express.Router();
const requireAdmin = require('./util/requireAdmin');
const supabase = require('../db/supabase');
const bcrypt = require('bcrypt');

//Logs in Admin. Uses /api/admin
router.post('/', async (req, res) => {
  //use try{}catch{} to catch any errors before they happen so that
  try{
    //grab necessary variables from req.body
    const {username, email, password} = req.body;
    //if there is not all materials present, 
    //deny the user from logging in.
    if(!username || !email || !password){
      return res.status(400).json({error: "You must fill out username, email, and password."});
    }

    //query supabase database.
    const {data, error} = await supabase
      .from("admin")
      .select("*")
      .eq("email", email)
      .single();
    
    //if supabase did not respond, throw a 500 error.
    if(error){
      return res.status(500).json({error: "The server has malfunctioned."})
    }
    
    //if the username does not match, throw a 401 error
    if(data.username != username ){
      return res.status(401).json({error: "The username, email, or password was incorrect."});
    }

    //use bcrypt to compare the inputted password with the hashed password.
    var valid = await bcrypt.compare(password, data.password_hash);
    if(!valid){
      return res.status(401).json({error: "The username or password was incorrect."});
    }

    //if everything is correct, allow the user to login.
    return res.status(200).json({
       message: 'Login Successful',
       admin: {
         id: 1,
         username,
         email
       }
    });
  } catch(err){
     res.status(400).json(err);
     console.log(err);
  };
});

//change a detail about admin
//accepts username, email, password, name
//is /api/admin
//router.put('/', requireAdmin, (req, res) => {
//  const {username, email, password, name} = req.body;
//  try{

//  } catch(err){
//    res.status(500).json(err);
//    console.log("Failed to edit Admin information. Error in: Admin.js");
//  }
//});

module.exports = router;