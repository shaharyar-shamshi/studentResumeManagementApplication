const express = require('express');
const app = express();
const morgan = require('morgan');
const functions = require('functions');
var bodyParser = require('body-parser');

app.listen(5000, function() {
    console.log("server is listening on port 5000");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// setup the logger
app.use(morgan('combined', {stream: process.stdout}))

// setup routes
app.use(require('routes'));

module.exports = app;
