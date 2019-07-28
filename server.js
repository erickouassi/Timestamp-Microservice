// server.js
// where your node app starts
"use strict";
// init project
var express = require('express');
var moment = require('moment');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get('/:timeStamp', function (req, res) {
   let timeStamp = req.params.timeStamp;
  let date;
  var unixTimeStamp = /[0-9]{8,}/;
    
  if (unixTimeStamp.test(timeStamp)) date = moment(timeStamp, "X");
  else date = moment(timeStamp, 'MMMM DD, YYYY');
    
  if (date.isValid()) {
    res.json({
      'unix': date.format('X'),
      'natural': date.format('MMMM DD, YYYY')
    });
  } else {
    res.json({
      'unix': null,
      'natural': "Invalid Date"
    });
  }
  
});

// 404 Not Found 
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});