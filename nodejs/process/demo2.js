console.log('开始');
process.nextTick(function(){
	console.log('nextTick回调');
})
console.log("已设定")