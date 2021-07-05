// sticky navbar

$(document).ready(function(){

    

    let navbar = $("#menu");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $("#offers").offset().top - window.innerHeight;
  console.log(window.innerHeight);
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

});