(
	function drag(){
		var drag = document.getElementById("drag");
		var title = document.getElementsByClassName("title")[0];
		var x,y;
		var isMove = false;
		var marginLeft;
		var marginTop;
		title.onmousedown = function(e){
			isMove = true;
			x = e.clientX;
			y = e.clientY;
			marginLeft = drag.style.marginLeft?drag.style.marginLeft:0;
			marginTop = drag.style.marginTop?drag.style.marginTop:0;
		}
		
		document.onmousemove = function(e){
			var x1 = e.pageX;
			var y1 = e.pageY;
			if(isMove){
				drag.style.marginLeft = (e.clientX-x+parseInt(marginLeft))+'px';
				drag.style.marginTop =  (e.clientY-y+parseInt(marginTop))+'px';
			}
		}
		
		document.onmouseup = function(e){
			isMove = false;
		}
		/*title.onclick = function(){
			isMove = false
		}
		title.ondblclick = function(){
			isMove = false
		}*/
	}
)();
