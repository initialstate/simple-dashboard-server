var express = require('express'),
	bodyParser = require('body-parser');

// Initialize our Express app.
var app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/dashboard', function(req, res) {
  res.sendFile(__dirname + '/dashboard.html');
});

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3000);