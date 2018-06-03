g1.onclick = function myFunction(){
	var x = document.getElementById("gmi1");

	if(x.className === "gm1"){
		x.className += " ref";
	} else{
		x.className = "gm1";
	}
}