var circle = require('./circle.js');
console.info("后执行")
console.info(module)
console.info(circle) //{ area: [Function], circumference: [Function] }
console.log( 'The area of a circle of radius 4 is ' + circle.area(4));