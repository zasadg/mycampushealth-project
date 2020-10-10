let navbar = document.querySelector('nav');
let navbarCollapse = document.querySelector('navbar-collapse');
let navbarToggler = document.getElementById('burger');

window.onscroll = function () {
if (window.scrollY > 50){
  navbar.classList.add('bg-white');
}
else{
  navbar.classList.remove('bg-white');
}
}

navbarToggler.onclick= function(){

  if (!$(".navbar-collapse").hasClass("show")) {
    $(".navbar").addClass("bg-white");
  } 
  else {
    if ($(window).scrollTop() < 50) {
      $(".navbar").removeClass("bg-white");
    } 
  }
}

