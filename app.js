var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function () {
	console.log('Example app listening on port 5000!');
});

