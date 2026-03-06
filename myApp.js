let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Middleware to parse URL-encoded bodies (from HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to parse JSON bodies (optional, but good practice)
app.use(bodyParser.json());

// POST handler at /name

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

module.exports = app;
