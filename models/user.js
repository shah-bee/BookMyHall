const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const db = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.addUser = function (newuser, callback) {

    // generating a hash for the password
    // genSalt is similar to generating a random number --> salt is the result which we will pass to 
    // bcrypt for generating the hash.

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
            if (err) throw err;
            newuser.password = hash;
            newuser.save(callback);
        })
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash, (err, isMatch) => {
        if(err) throw err;
        callback(err,isMatch);
    })
}

module.exports.getUserProfiles = function (callback) {
    User.find(callback);
}


module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
    User.find();
}

module.exports.getUserByName = function (username, callback) {
    const query = { username: username };
    User.findOne(query, callback);
};

