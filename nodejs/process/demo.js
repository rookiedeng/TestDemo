'use strict';
process.on('exit',function(){
	setTimeout(function(){
		console.log("主事件循环已停止，所以不会执行");
	},0);
	console.log("退出当前执行");
})
// 故意制造一个异常，而且不catch捕获它.
nonexistentFunc();
console.log('This will not run.');