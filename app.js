var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/", express.static(__dirname + '/dist'));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/dist/index.html');
});
// 404 catch 
app.all('*', function(req, res) {
  console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
  res.status(200).sendFile(__dirname + '/dist/index.html');
});
app.listen(app.get('port'), function () {
	console.log('Example app listening on port 5000!');
});

