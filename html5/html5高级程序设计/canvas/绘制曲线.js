var canvas = document.querySelector("#test");
var context = canvas.getContext("2d");

context.lineWidth = 10;

context.beginPath();
context.moveTo(100,100);
context.lineTo(200,300);
context.lineTo(100,300);
context.strokeStyle="red";

context.beginPath();
context.moveTo(300,300);
context.lineTo(400,400);
context.lineTo(300,400);
context.strokeStyle="blue";

context.beginPath();
context.moveTo(500,500);
context.lineTo(550,550);
context.lineTo(300,550);
context.strokeStyle="yellow";

context.stroke();

//首先绘制路径，然后绘制边框和填充色
