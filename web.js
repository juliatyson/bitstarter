var express = require('express');
var app = express();
app.use(express.logger());
var read = new Buffer(200);
read = fs.readFileSync(index.html);

app.get('/', function(request, response) {
  response.send(read.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
