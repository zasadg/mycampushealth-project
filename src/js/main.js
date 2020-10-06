// $(document).ready(function() {
// // //     // executes when HTML-Document is loaded and DOM is ready
// // //     /*
// // //     ################
// // //     Add navbar background color when scrolled
// // //     */
    $(window).scroll(function() {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-white");
      } else {
        $(".navbar").removeClass("bg-white");
      }
    });
// //     // If Mobile, add background color when toggler is clicked
    // $(".navbar-toggler").click(function() {
    //   if (!$(".navbar-collapse").hasClass("show")) {
    //     $(".navbar").addClass("bg-white");
    //   } 
    //   else {
    //     if ($(window).scrollTop() < 56) {
    //       $(".navbar").removeClass("bg-white");
    //     } 
    // //     else {
    // //     }
    //   }
    // });
   
// //     // document ready
//   });

 
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
 

    


   


    

