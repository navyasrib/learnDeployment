var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'content-Type': 'text/html'});
	res.end('<h1>Trail</h1>')
});

var port = Number(process.env.PORT || 5050)

server.listen(port);

server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
});
