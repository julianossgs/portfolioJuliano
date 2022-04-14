


function openNav() {
	var x = document.getElementById('navigation');
	
	if(x.className === "navigation"){
		x.className += " menujs";
		document.getElementById("btn").innerHTML = "&Cross;";
	}

	else{
		x.className = "navigation";
		document.getElementById("btn").innerHTML = "&#9776";
	}
}