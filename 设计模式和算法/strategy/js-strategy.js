/*4. JS版本的策略模式
　　在上节中，我们让strategy对象从各个策略类中创建而来，这是模拟一些传统面向对象语言的实现。实际上在JS语言中，函数也是对象，所以更简单和直接的做法是把strategy直接定义为函数：
*/
    
　　//同样，Context也没有必要必须用Bonus类来表示，我们依然用calculateBonus函数充当Context来接受用户的请求。经过改造，代码的结构变得更加简洁：
    var strategies = {
        'S': function (salary) {
            return salary * 4;
        },
        'A': function (salary) {
            return salary * 3;
        },
        'B': function (salary) {
            return salary * 2;
        }
    };
    var calculateBonus = function (level, salary) {
        return strategies[level](salary);
    };
    console.log(calculateBonus('S', 4000));//输出：16000
    console.log(calculateBonus('A', 4000));//输出：12000