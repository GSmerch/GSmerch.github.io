n1.onclick = function myFunction(){
	var x = document.getElementById("nwi1");

	if(x.className === "nw1"){
		x.className += " ref";
	} else{
		x.className = "nw1";
	}
}