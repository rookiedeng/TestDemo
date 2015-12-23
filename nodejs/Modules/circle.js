console.info("先执行")
var PI = Math.PI;
console.info(module)
exports.area = function (r) {
    return PI * r * r;
};
exports.circumference = function (r) {
    return 2 * PI * r;
};