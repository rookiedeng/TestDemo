function MenuItem(text, title, href) {
    this.text = text;
    this.title = title;
    this.href = href;
    Interface.registerImplements(this, MenuComponent);
}

MenuItem.prototype = {
    getValue : function() {
        var str = "<li class=\"Menu-Leaf\" title=\"" + this.title + "\"><a href=\"" + this.href + "\">" + this.text + "</a></li>";
        return str;
    }
}