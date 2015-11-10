Array.prototype.indexOf = function(vItem) {
    for(var i = 0; i < this.length; i++)
    {
        if(vItem == this[i])
        {
            return i;
        }
    }
    return -1;
}

function test(){
    var arr = Array();
    arr = [ "a", 12, function(){}, "b"];
    alert(typeof arr[1]);
}