const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require('../models/user');

router.post('/register', (req,res,next) => {

const newUser = new User({
    name : req.body.name,
    email: req.body.email,
    username : req.body.username,
    password : req.body.password
});

User.addUser(newUser,  (err,user) => {
    if(err){
        res.json({success : false , msg :"Regestration failed for the user"});
    }else{
        res.json({success : true , msg :"Regestration failed for the user"});
    }
})

});

router.get('/authenticate', (req,res,next) => {
    res.send("Authenticate!");

})

module.exports = router;