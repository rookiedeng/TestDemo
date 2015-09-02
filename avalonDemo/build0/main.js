require.config({
    baseUrl: "."
})

require(["aaa", "text!aaa.html", "css!aaa", "domReady!"], function(a, b) {
    document.body.appendChild(a(b))
})