//Dependencies
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');

//Instantiating express and setting up our Middleware to parse data from the client
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

//starting our listerner for client requests
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

