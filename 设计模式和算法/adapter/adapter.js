/// 定义客户端期待的接口
function Target(){}
Target.prototype.Request = function(){
	console.info("This is a common request");
}

 /// 定义需要适配的类
function Adaptee(){}
Adaptee.prototype.SpecificRequest = function(){
	console.info("This is a special request.");
}

/// 定义适配器   Adapter:需要把Adaptee 和target联系起来
function Adapter(){
	  // 建立一个私有的Adeptee对象
	this.adaptee = new Adaptee();
}
Adapter.prototype = new Target();
  /// 通过重写，表面上调用Request()方法，变成了实际调用SpecificRequest()
Adapter.prototype.Request = function(){
	this.adaptee.SpecificRequest();
}

target = new Adapter();
console.info(target instanceof Target);
console.info(target instanceof Adapter)
target.Request();