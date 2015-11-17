var races = [];
var volunteers = [];


var racesList ;
var volunteersList;
function loadDemo(){
	racesList  = document.getElementById("racers");
	
	var lists = [racesList]
	[].foreach.call(lists,function(list){
		list.addEventListener("dragenter",handleDragEnter,false);
		list.addEventListener("dragleave",handleDragLeave,false);
		list.addEventListener("drop",handleDrop,false);
	});
	racesList.addEventListener("dragover",handleDragOverRacers,false);
	
	var fieldsets = document.querySelector("#racesField");
	fieldsets.addEventListener("dragover",handleDragOverOuter,false);
	
	var members = document.querySelectorAll("#members li");
	[].forEach.call(members,function(member){
		member.addEventListener("dragstart",handleDragStart,false);
		member.addEventListener("dragend",handleDragEnd,false);
	})
}

function handleDragStart(evt){
	console.info("handleDragStart-------------------")
	evt.effectAllowed = "copy";
	evt.dataTransfer.setData("text/plain",evt.target.textContent);
	evt.dataTransfer.setData("text/html",evt,target.dataset.age);
	
	racesList.className="validtarget";
	return true;
}

function handleDragEnter(evt){
	console.info("handleDragEnter--------------------");
	evt.stopPropagation();
	evt.preventDefault();
	return false;
}

function handleDragEnter(evt){
	console.info("handleDragEnter----------------------");
	return false;
}

function handleDragOverOuter(evt){
	console.info("handleDragOverOuter-------------------");
	if(evt.target.id==="racersField")
		racerList.className = "validtarget";
	evt.stopPropagation();
	return false;
}

function handleDragOverRacers(evt){
	console.info("handleDragOverRacers--------------------");
	evt.dataTransfer.dropEffect = "copy";
	evt.stopPropagation();
	evt.preventDefault();
	
	racerList.className = "highlighted";
}

function handleDrop(evt){
	console.info("handleDrop-------------------------------------------");
	evt.preventDefault();
	evt.stopPropagation();
	
	var dropTarget = evt.target;
	
	var text = evt.dataTransfer.getData("text/plain");
	
	
	
}


window.addEventListener("load",loadDemo,false)
