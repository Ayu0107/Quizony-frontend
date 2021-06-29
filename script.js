function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
		document.getElementById("dropdown-hover-link").style.display = "block";
		document.getElementById("dropdown-hover-link2").style.display = "block";
	} else {
		x.className = "topnav";
		document.getElementById("dropdown-hover-link").style.display = "none";
		document.getElementById("dropdown-hover-link2").style.display = "none";
	}
}