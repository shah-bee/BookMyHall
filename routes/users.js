const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require('../models/user');
const config = require('../config/database');``

router.post('/register', (req, res, next) => {

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: "Registration failed for the user" });
        } else {
            res.json({ success: true, msg: "Registration done for the user!" });
        }
    })

});

router.get('/profile', passport.authenticate("jwt", { session: false }), (req, res, next) => {
   // res.json({user : req.user});
    console.log(req)
    User.getUserProfiles((err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/authenticate', (req, res, next) => {
    const userName = req.body.username;
    const password = req.body.password;

    const useer = User.getUserByName(userName, (err, user) => {
        if (err) {
            res.json({ success: false, msg: "User not found" });
        }
        else {
            User.comparePassword(user.password, password, (err, isMatch) => {
                if (err) {
                    res.json({ success: false, msg: "username or password is mismatch!" });
                }
                else {
                    console.log(user);
                    const token = jwt.sign(JSON.stringify(user),config.secret);

                    res.json({
                        success: true,
                        token: "JWT " + token,
                        user: {
                            name: user.name,
                            email: user.email
                        }
                    })
                }
            });
        }
    })
})

module.exports = router;