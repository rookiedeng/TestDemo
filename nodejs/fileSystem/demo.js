'use strict'
var fs = require('fs');
var path = './demo1.txt';
/*fs.unlink('./temp/hello.js',function(err){
	if(err) throw err;
	console.log("successfully deleted /tmp/hello")
})
*/
//获取文件的信息
//fs.stat('./demo.txt',function(err,fileInfo){
//	console.info(fileInfo)
//	var buff = new Buffer(fileInfo.size);//1kb
//	fs.open('./demo.txt','r+',function(err, fd){
//		console.info(err);
//		fs.read(fd,buff,0,fileInfo.size,0,function(err, bytesRead, buffer){
//			console.info(err);
//			console.info(bytesRead);
//			console.info(buffer.toString())
//		})
//	})
//})


//fs.readFile('./demo.txt',function(err,buff){
//	if(err)
//		throw err;
//	console.log(buff.toString())
//})

//fs.rename(path,'./demo1.txt',function(err){
//	console.info(err)
//})

	//这个会把源文件给截断掉
//fs.open(path,"r+",function(err,fd){
//
//	var obj = fs.ftruncate(fd,4,function(err){
//		console.info(err)
//		console.info(obj)
//	})
//})

//这个不会再源文件中追加，只会进行覆盖
//fs.writeFile('./writeDemo.txt','这是一个写入操作','utf8',function(err){
//	
//})

//文件追加
fs.appendFile('./writeDemo.txt','这是一个追加操作','utf8',function(err){})

//判断文件是否存在
fs.exists('./writeDemo.txt',function(flag){
	console.info(flag);
})

//目录操作
fs.mkdir('./mkdir',function(){})




