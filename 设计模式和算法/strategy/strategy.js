/*3. 使用策略模式重构代码
　　策略模式指的是定义一系列的算法，把它们一个个封装起来。将不变的部分和变化的部分隔开是每个设计模式的主题，策略模式的目的就是将算法的使用与算法的实现分离开来。
　　一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context中要维持对某个策略对象的引用。
　　现在用策略模式来重构上面的代码。第一个版本是模仿传统面向对象语言中的实现。我们把每种效绩的计算规则都封装在对应的策略类里：
 */
 var performanceS = function () { };
    performanceS.prototype.calculate = function (salary) {
        return salary * 4;
    };
    var performanceA = function () { };
    performanceA.prototype.calculate = function (salary) {
        return salary * 3;
    };
    var performanceB = function () { };
    performanceB.prototype.calculate = function (salary) {
        return salary * 2;
    };
    //接下来定义奖金（Context）类Bonus：
    var Bonus = function () {
        this.salary = null; //工资
        this.strategy = null;//效绩等级对应的策略对象
    };
    Bonus.prototype.setSalary = function (salary) {
        this.salary = salary;//设置工资
    }
    Bonus.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;//设置效绩等级对应的策略对象
    };
    Bonus.prototype.getBonus = function () {//取得奖金
        return this.strategy.calculate(this.salary);//把计算奖金的操作委托给对应的策略对象
    };
    var bonus = new Bonus;
    bonus.setSalary(2000);
    bonus.setStrategy(new performanceA);
    console.log(bonus.getBonus());//输出：6000
    bonus.setStrategy(new performanceS);
    console.log(bonus.getBonus());//输出：8000
    
/*　　我们再来回顾一下策略模式的思想：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
　　这句话说的再详细点，就是：定义一系列的算法，把它们各自封装成策略类，算法被封装在策略类内部的方法里。在客户对Context发起请求时，Context总是把请求委托给这些策略对象中间的某一个进行计算。*/