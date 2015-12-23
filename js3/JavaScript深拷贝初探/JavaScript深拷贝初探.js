/*
 * 博客地址：http://www.cnblogs.com/souvenir/archive/2015/12/23/5066879.html
 1. 数据类型判断
　　实现深拷贝的第一步就是判断数据类型。
　　我们都知道，JavaScript的数据类型分为两大类：
　　基本类型：String,Number,Boolean,undefined,Null
　　引用类型：Object,Array,Date,Reg,Function等
　　对于基本类型的判断，我们使用typeof就可以，对于实例类型，也可以通过instanceof来判断。
　　除了这两个方法以外，我们还有一些别的方式来判断，就是Object下的toString方法.
2. 深拷贝
	一般情况下，我们主要解决以下引用类型的深度拷贝：
	对象：遍历对象的所有属性，将其值拷贝到目标元素的对应属性上。
	数组：遍历数组的所有元素，将其值分别拷贝到目标数组的对象index下。
	函数：一般来说不作特殊处理，如果需要的话可以先将function通过tostring方法转换为字符串，然后再调用eval还原函数。
 * */
var util={
        getType:function(o){    //判断对象类型
            var _t;
            return ((_t = typeof(o)) == "object" ? o==null && "null" || Object.prototype.toString.call(o).slice(8,-1):_t).toLowerCase();
        },
        deepClone:function(source){//深拷贝
            var destination=util.getType(source);
            destination=destination==='array'?[]:(destination==='object'?{}:source);
            for (var p in source) {
                if (util.getType(source[p]) === "array" || util.getType(source[p]) === "object") {
                    destination[p] = util.getType(source[p]) === "array" ? [] : {};
                    destination[p]=arguments.callee(source[p]);
                } else {
                    destination[p] = source[p];
                }
            }
            return destination;
        }
    };
    
var obj1={
        attr:100,
        obj:{
        	a:1,
        	b:2
        },
        arr:[2,3,4]
    };
    var obj2=util.deepClone(obj1);    //将obj1深拷贝到obj2
    obj2.attr=200;    //修改obj2的属性值
    console.log(obj1.attr);    //obj1属性值未发生变化
