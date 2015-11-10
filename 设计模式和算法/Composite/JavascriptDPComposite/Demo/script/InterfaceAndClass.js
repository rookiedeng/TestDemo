function Interface(name, methods) 
{
    if(arguments.length != 2) {
        throw new Error("�ӿڹ��캯����" + arguments.length + "������, ����Ҫ2������.");
    }
    
    this.name = name;
    this.methods = [];
    
    if(methods.length < 1) {
        throw new Error("�ڶ�������Ϊ������.");
    }
    
    for(var i = 0, len = methods.length; i < len; i++) {
        
        if(typeof methods[i][0] !== 'string') {
            throw new Error("�ӿڹ��캯����һ����������Ϊ�ַ�������.");
        }
        if(methods[i][1] && typeof methods[i][1] !== 'number') {
            throw new Error("�ӿڹ��캯���ڶ�����������Ϊ��������.");
        }
        
        if(methods[i].length == 1) {
            methods[i][1] = 0;
        }

        this.methods.push(methods[i]);
    }    
};

Interface.registerImplements = function(object) {

    if(arguments.length < 2) {
        throw new Error("�ӿڵ�ʵ�ֱ����������2������.");
    }
    
    for(var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if(interface.constructor !== Interface) {
            throw new Error("�ӵ�2�����ϵĲ�������Ϊ�ӿ�ʵ��.");
        }
        
        for(var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j][0];

            if(!object[method] || typeof object[method] !== 'function' || object[method].getParameters().length != interface.methods[j][1]) {
                throw new Error("�ӿڵ�ʵ�ֶ�����ִ��" + interface.name + "�Ľӿڷ���" + method + "����Ϊ���Ҳ������߲�ƥ��.");
            }
        }
    }
};

Function.prototype.getParameters = function() {

    var str = this.toString();
    var paramString = str.slice(str.indexOf('(') + 1, str.indexOf(')')).replace(/\s*/g,'');     //ȡ�ò����ַ���
    
    try
    {
        return (paramString.length == 0 ? [] : paramString.split(','));
    }
    catch(err)
    {
        throw new Error("�������Ϸ�!");
    }
}

function inheritClass(subClass, superClass)
{
    var Func = function() {};
    for(p in superClass.prototype)
    {
        Func.prototype[p] = superClass.prototype[p];
    }
    subClass.prototype = new Func();
    subClass.prototype.constructor = subClass;
}