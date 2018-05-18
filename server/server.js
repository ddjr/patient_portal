const express = require('express');
var app = express();
const mongoose = require('mongoose');
const fs = require('fs');
var bodyParser = require('body-parser');


// DB
const mongoUri = 'mongodb://localhost/test'
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error at: ' + mongoUri));
db.once('open', function() {
  // we're connected!
});


// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

// Models
require('./models/patient');
require('./models/appointment');
require('./models/user');

// Routes
require('./routes')(app);


// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
