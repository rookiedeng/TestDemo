(
	function drag(){
		var card = document.getElementsByClassName("card");
		var x,y;
		var isMove = false;
		var marginLeft;
		var marginTop;
		var moveCard;
		for(var i=0;i<card.length;i++){
			var thisCard = card[i];
			thisCard.onmousedown = function(e){
				moveCard = this;
				isMove = true;
				x = e.clientX;
				y = e.clientY;
				marginLeft =this.style.marginLeft?this.style.marginLeft:0;
				marginTop = this.style.marginTop?this.style.marginTop:0;
			}
		}
		
		
		document.onmousemove = function(e){
			if(isMove){
				moveCard.style.position="absolute";
				moveCard.style.marginLeft = (e.clientX-x+parseInt(marginLeft))+'px';
				moveCard.style.marginTop =  (e.clientY-y+parseInt(marginTop))+'px';
			}
		}
		
		document.onmouseup = function(e){
			moveCard.style.position="relative";
			isMove = false;
		}
	}
)();
