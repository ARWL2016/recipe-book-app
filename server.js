var express = require('express'); 
var path = require('path'); 

var app = express(); 
var port = process.env.PORT || 5001; 

app.use(express.static('app')); 

app.listen(port, () => {
  console.log('Listening on port ' + port); 
})
