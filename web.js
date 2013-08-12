var express = require('express'), http = require('http'), fs = require('fs');
var app = express();
app.set('port', process.env.PORT || 5000);

app.get('/', function(request, response) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text) {

    response.send(text);
   });
});

http.createServer(app).listen(app.get('port'), function(){

  console.log('Server started at ' + app.get('port'));
});
