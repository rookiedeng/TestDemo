   	_([1, 2, 3])
   	// 创建对象式的调用方式, 将返回一个Underscore包装器, 包装器对象的原型中包含Underscore所有方法(类似与将DOM对象包装为一个jQuery对象)
    var _ = function(obj) {
        // 所有Underscore对象在内部均通过wrapper对象进行构造
        return new wrapper(obj);
    };
    
    //1281
	var wrapper = function(obj) {
	        // 原始数据[1, 2, 3]存放在包装对象的_wrapped属性中
	        this._wrapped = obj;
	    };