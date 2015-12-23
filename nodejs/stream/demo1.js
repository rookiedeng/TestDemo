var http = require('http');
var fs = require('fs');
var path = './file.txt';
var server = http.createServer(function(req,res){
	res.writeHeader(200,{
		   'Content-Type' : 'text/plain;charset=utf-8' 
	})
	/*fs.readFile('./file.txt',function(err,data){
		res.end(data);
	});*/
	var stream  = fs.createReadStream(path);
	stream.pipe(res);
});
server.listen('2121')
