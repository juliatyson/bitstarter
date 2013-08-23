var express = require('express'), fs = require('fs');
var file = "index.html";

var app = express(express.logger()); 

app.get('/', function(request, response) {
   var readfile = fs.readFileSync(file).toString(); 
   response.send(readfile);
 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);

});
