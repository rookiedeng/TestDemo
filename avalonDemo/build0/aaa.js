define(function() {
    return function(text) {
        var div =  document.createElement("div")
        div.innerHTML = text
        return div
    }
})
