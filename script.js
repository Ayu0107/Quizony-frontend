$(function(){
	$(document).one('click', '.like-quiz', function(e) {
		$(this).html('<i class="fas fa-thumbs-up" aria-hidden="true">1</i>');
		$(this).children('.fa-thumbs-up').addClass('animate-like');
	});
});


// let mainNav = document.getElementsByClassName('responavlink');
// let navBarToggle = document.getElementById('navbarToggle');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });

// function myFunction() {
// 	var x = document.getElementById("responavlink");
// 	if (x.style.display === "block") {
// 	  x.style.display = "none";
// 	} else {
// 	  x.style.display = "block";
// 	}
//   }

//   const body = document.querySelector("body");
//   const navbar = document.querySelector(".navbar");
//   const menuBtn = document.querySelector(".menu-btn");
//   const cancelBtn = document.querySelector(".cancel-btn");
//   menuBtn.onclick = ()=>{
// 	navbar.classList.add("show");
// 	menuBtn.classList.add("hide");
// 	body.classList.add("disabled");
//   }
//   cancelBtn.onclick = ()=>{
// 	body.classList.remove("disabled");
// 	navbar.classList.remove("show");
// 	menuBtn.classList.remove("hide");
//   }
//   window.onscroll = ()=>{
// 	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
//   }


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");

// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function myFunction() {
	var x = document.getElementsByClassName("responavlink");
	if (x.className === "responavlink") {
	  x.className += " responsive";
	} else {
	  x.className = "responavlink";
	}
  }
