'use strict'
var http = require("http");
var server = http.createServer(function(req,res){
	var body = '';
	req.setEncoding('utf-8');
	req.on('data',function(chunk){
		console.info(chunk)
		body+=chunk
	})
	req.on('end', function () {
	    try {
	      var data = JSON.parse(body);
	    } catch (er) {
	      // uh oh!  bad json!
	      res.statusCode = 400;
	      return res.end('错误: ' + er.message);
	    }
	    res.write(typeof data);
	    res.end();
  })
})
server.listen(1337);