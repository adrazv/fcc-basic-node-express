let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Middleware to parse URL-encoded bodies (from HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to parse JSON bodies (optional, but good practice)
app.use(bodyParser.json());

// POST handler at /name
app.post('/name', (req, res) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;
