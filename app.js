var express = require('express')
// will check the node+modules folder to find node.js. is assumes this is js file because this is javascrips
var app = express();

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/index.html");
});


app.get('/', function(request, response) {
    response.send("hello world");
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

//app.listen(process.env.PORT);