const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../server/index');
const requireAdmin = require('./util/requireAdmin');



//Log in as Admin
//Accepts username, email, and password
// is /api/admin
router.post('/', async (req, res) => {
  console.log("attempting to log in...");
  const {username, email, password} = req.body;
  console.log(req.body);
  try{
    const admin = await loginAdmin(username, email, password);
    if(!admin){
      return res.status(401).json({ message: 'Invalid credentials' });
    }
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
  }
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