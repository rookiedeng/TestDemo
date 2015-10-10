/*1. 最初的实现
　　我们可以编写一个名为calculateBonus的函数来计算每个人的奖金，它接受两个参数：工资和效绩。代码如下：*/

    var calculateBonus = function (performance, salary) {
        if (performance === 'S') {
            return salary * 4;
        }
        if (performance === 'A') {
            return salary * 3;
        }
        if (performance === 'B') {
            return salary * 2;
        }
    };
    console.log(calculateBonus('S', 4000));//输出：16000
    console.log(calculateBonus('A', 3000));//输出：9000
/*　　这段代码十分简单，却存在着显而易见的缺点。

calculateBonus函数比较庞大，包含了很多if-else语句，这些语句需要覆盖所有的逻辑分支。
calculateBonus函数缺乏弹性，如果增加了一种新的效绩等级C，或者想把效绩S翻5倍，那我们必须深入calculateBonus函数的内部实现，这是违反开放-封闭原则的。
算法的复用性差，如果在程序的其他地方需要重用这些计算奖金的算法，我们只有复制粘贴。
因此，我们需要重构这段代码。*/

/*2. 使用组合函数重构代码
　　我们把各种算法封装到一个个的小函数里面，这些小函数有着良好的命名，可以一目了然地知道它对应着哪种算法，它们也可以被用在程序的其他地方。代码如下：*/

    var performanceS = function (salary) {
        return salary * 4;
    };
    var performanceA = function (salary) {
        return salary * 3;
    };
    var performanceB = function (salary) {
        return salary * 2;
    };
    var calculateBonus = function (performance, salary) {
        if (performance === 'S') {
            return performanceS(salary);
        }
        if (performance === 'A') {
            return performanceA(salary);
        }
        if (performance === 'B') {
            return performanceB(salary);
        }
    }
    console.log(calculateBonus('S', 3000));//输出：12000
    console.log(calculateBonus('B', 3000));//输出：6000
/*　　目前，我们的程序得到了一定的改善，但这种改善非常有限，我们依然没有解决最重要的问题：calculateBonus函数有可能越来越庞大，而且在系统变化的时候缺乏弹性。*/