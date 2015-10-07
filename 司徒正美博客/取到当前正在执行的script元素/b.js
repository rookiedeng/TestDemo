function getInteractiveScript(){
			    if(document.currentScript){
			        return document.currentScript;
			    }
			    var els = document.getElementsByTagName("script");
			    for(var i = 0, el; el = els[i++];){
			        if (el.readyState === 'interactive') {
			            return el
			        }
			    }
			    return null
			}
console.info(getInteractiveScript()+"-------b");