布尔属性

布尔属性是控制元素的某一个状态，是一种比较特别的属性。由于浏览器商之前互相没协商好，因此在定义布尔属性时，也有差异。
布尔属性主要出现 在表单元素上，常见的有radio,checkbox上的checked属性，option元素的selected属性，文本域，文本区，密码域上的readonly属性，select元素上的multiple属性，
并且所有 表单元素都支持disabled属性。
我们在JS设置一个布尔属性是否发挥作用，通常直接设置true与false
input.disabled = false

由于布尔属性是一种固有属性，因此不能使用removeAttribute进行操作。
而在HTML中，只有我们设置了这个属性，不管它的值是什么，或者干脆就只有属性名，它都认为其值为true。这是一个大坑，需要大家注意。
在早些年的XHTML规范中，建议大家将属性名与属性值写成一样，如
<input disabled="disabled" >

由于HTML规范是规定将所有写在标签内的属性名都转换成小写，因此disabled与disAbled是一样的。但在JS写里就不一样，如readonly 是对应readOnly，不过事实上，这些大小写不规则的布尔属性没几个：
defaultChecked,defaultSelected，contentEditable,isMap,noHref,noResize,noShade

下面是分讲几个布尔属性的用法

selected: option的属性，一旦选上，就出现高亮状态，并将其name,value(没有就取其innerHTML)提交上去
readonly: 用于输入性的控件，让用户只能看，不能修改
disabled: 让表单元素蒙上一个灰白的色调，用户无法操作它，也不会提交其内容
multiple：让下拉框变成多选形式，可以按着SHIFT进行多选
hidden: 用于所有元素，这是HTML5新增的布尔属性，效果如同display:none，但其优先级低于CSS，因此没有大规范使用
contentEditable： 应用于所有可见的非表单元素，让元素也像INPUT那样编辑它里面的内容
扩展阅读
async： 用于script标签，是近十年出现最有用的属性，让脚本不再堵塞页面加载，早期IE出了一个defer属性,有关它的区别可见这里