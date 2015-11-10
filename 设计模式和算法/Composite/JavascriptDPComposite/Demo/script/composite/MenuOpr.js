
var MenuOpr = {
    list : new Array(),
    add : function(component) {
        this.list.push(component);
    },
    print : function(container) {
        var str = "<ul class=\"Menu\">";
        for(var i = 0, len = this.list.length; i < len; i++) {
            str += this.list[i].getValue();
        }
        document.getElementById(container).innerHTML = str + "</ul>";
    }
}