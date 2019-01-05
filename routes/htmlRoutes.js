var path = require('path');

//These are our two html routes that we need
module.exports = function(app){

//We are using our get method to display the survey page
 app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

 
  //We are using our get method  to display the home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

};

