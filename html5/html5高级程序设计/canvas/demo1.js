try{
	document.createElement("canvas").getContext("2d");
	document.querySelector("#support").innerHTML ="支持canvers"
}catch(e){
	//TODO handle the exception
	document.querySelector("#support").innerHTML ="不支持canvers"
}




function drawDiagonal(){
	var canvas = document.querySelector("#diagonal");
	var context = canvas.getContext("2d");
	context.beginPath();
	context.moveTo(70,140);
	context.lineTo(140,70);
	context.stroke();
}

//变换
function drawDiagonal2(){
	var canvas = document.querySelector("#diagonal");
	var context = canvas.getContext("2d");
	context.save();
	
	context.translate(70,140);
	
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(70,-70);
	context.stroke();
	
	context.restore();
}

function getContext(){
	return 	document.querySelector("#diagonal").getContext("2d");		
}

function createCanopyPath(context){
	context.beginPath();
	context.moveTo(-25,-50);
	context.lineTo(-10,-80);
	context.lineTo(-20,-80);
	context.lineTo(-5,-110);
	context.lineTo(-15,-110);
	
	context.lineTo(0,-140);
	context.lineTo(15,-110);
	context.lineTo(5,-110);
	context.lineTo(20,-80);
	context.lineTo(10,-80);
	context.lineTo(25,-50);
	
	context.closePath();
}

function drawTrails(){
	var context = getContext();
	context.save();
	context.translate(130,250);
	createCanopyPath(context);
	
	context.lineWidth = 4;
	context.lineJoin = "round";
	context.strokeStyle ="red"
	context.stroke();
	context.restore();
	
	
	context.fillStyle="#339900";
	context.fill();
}
drawTrails();

//已看到第50页


//window.addEventListener("load",drawDiagonal2,true);
