//importing node framework
var express = require('express');
 
var app = express();
//Respond with "Hey world demo" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('Hey world!');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;