const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const db = require('./config/database');
const winston = require('winston');

var logger = new (winston.Logger)({
  level: 'info',
  transports:[
    new (winston.transports.Console)()
  ],

  exceptionHandlers: [
      new winston.transports.File({ filename: path.join(__dirname, "public") + '/exceptions.log'})
    ],
    exitOnError:false
});

var myPassportService = require('./config/passport')(passport)


mongoose.connect(db.database,{
  useMongoClient :true
});

mongoose.connection.on('connected', () => {
  console.log("DB connected" + db.database);
});


// Initialize express

const app = express();

//PORT for the serever

const port = 3000;

// User routes
const users = require('./routes/users');

// MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//app.use(logger);

app.use(cors());

app.use(bodyParser.json());

app.use('/users', users);

// Set static file location, for developing client / customer views

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server started at port " + port);
});