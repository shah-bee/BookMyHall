const mongoose = require('mongoose');
const db = require('../config/database');


//User Schema
const studentSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },

});

const User = module.exports = mongoose.model("User", UserSchema);