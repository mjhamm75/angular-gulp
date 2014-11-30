var express = require('express');
var user = require('./routes/user.js');

var app = express();
var PORT = 9000;

app.use(express.static(__dirname + '/build'));
app.get('/', function(req,res) {
  res.sendFile('/index.html', {root: __dirname});
});

app.get('/users/:userId', user.getUser);
app.get('/users', user.getUsers);
app.post('/users', user.createUser);

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});