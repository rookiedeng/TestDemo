'use strict'
var fs = require('fs');

var srcPath = './file.txt';
var destPath="./destFile.txt"
var rs = fs.createReadStream(srcPath);
var ws = fs.createWriteStream(destPath);
rs.on("data",function(chunk){
	//console.info(chunk+'')
	ws.write(chunk);
})
rs.on('end',function(){
	ws.end();
})
