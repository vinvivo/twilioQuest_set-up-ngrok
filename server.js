var express = require('express');
var app = express();

app.get('/', function (req, res) {  // for all http request routes to homepage '/'
   res.send('Hello World');
});

var server = app.listen(8081, function () {   
   console.log("Example app listening at port 8081");
});