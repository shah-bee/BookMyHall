const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const db = require('./config/database');

mongoose.connect(db.database);

mongoose.connection.on('connected',() => {
  console.log("DB connected" + db.database);
});

// Initialize express

const app = express();

//PORT for the serever

const port = 3000;

// User routes
const users = require('./routes/users');

// MIDDLEWARE

app.use(cors());

app.use(bodyParser.json());

app.use('/users',users);

// Set static file location, for developing client / customer views

app.use(express.static(path.join(__dirname,"public")));

app.listen(port, () => {
    console.log("Server started at port " + port);
});