'use strict'
var fs = require('fs');

var srcPath = './file.txt';
var destPath="./destFile.txt"
var rs = fs.createReadStream(srcPath);
var ws = fs.createWriteStream(destPath);
rs.on("data",function(chunk){
	if(ws.write(chunk)==false){
		console.info('pause')
		rs.pause();
	}
})
rs.on('end',function(){
	ws.end();
})

ws.on('drain',function(){
	console.info('resume')
	rs.resume();
})
