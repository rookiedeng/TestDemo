function Menu(text, title, href) {
    this.menuComponents = new Array();
    this.text = text;
    this.title = title;
    this.href = href;
    Interface.registerImplements(this, MenuComponent);
}

Menu.prototype = {
    getValue : function() {
        if(this.menuComponents.length == 0)
        {
            throw new Error(this.text + "菜单下没有子菜单");
//            var str = "<li class=\"Menu-Leaf\" title=\"" + this.title + "\"><a href=\"" + this.href + "\">" + this.text + "</a></li>";
//            return str;
        }
        var str = "<li class=\"Menu-WithChildren\" title=\"" + this.title + "\"><a class=\"Menu-Link\" href=\"" + this.href + "\">" + this.text + "</a>";
        str += "<ul>";
        for(var i = 0, len = this.menuComponents.length; i < len; i++)
        {
            str += this.menuComponents[i].getValue();
        }
        str += "</ul>";
        return str;
    },
    add : function(component) {
        this.menuComponents.push(component);
    },
    remove : function(component) {
        for(var i = 0, len = this.menuComponents.length; i < len; i++)
        {
            if(this.menuComponents[i] == component)
            {
                this.menuComponents.splice(i,1);
                break;
            }
        }
    },
    removeAt : function(index) {
        if(this.menuComponents.length <= index)
        {
            this.menuComponents.splice(index, 1);
        }
        else
        {
            throw new Error("索引操作数组超过上限");
        }
    }
}