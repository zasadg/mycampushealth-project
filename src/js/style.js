let navbar = document.querySelector('nav');
let navbarCollapse = document.querySelector('navbar-collapse');
let navbarToggler = document.getElementById('burger');
let shadow = document.getElementById('shadow');

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

// $(document).ready(function(){
//   $(window).scroll(function(){
//    var y = $(window).scrollTop();
//    if( y > 0 ){
//        $("#shadow").css({'display':'block', 'opacity':y/20});;

//    } else {
//        $("#shadow").css({'display':'none', 'opacity':y/20});
//    }
//   });
//  })