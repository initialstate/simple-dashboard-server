var express = require('express'),
	bodyParser = require('body-parser'),
	IS = require('initial-state');

var bucket = IS.bucket({
	name: 'Web Page Form', 
	id: 'webpageform1', 
	accessKey: process.env.INITIALSTATE_ACCESS_KEY
});

// Initialize our Express app.
var app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/dashboard', function(req, res) {
  res.sendFile(__dirname + '/dashboard.html');
});

app.post('/dashboard', function(req, res) {
	var msg = req.body.msg;
	bucket.push('message', msg);
	res.redirect('/dashboard');
});

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3000);