let prevScrollPosition = $(window).scrollTop();
$(window).on("scroll", function() {
  let currentScrollPosition = $(window).scrollTop();
  
  if(prevScrollPosition > currentScrollPosition) {
    $(".menu").css({ "top": "0", "left": "0" });
  }
  
  else {
    $(".menu").css({ "top": "-100px", "left": "0" });
  }
  
  prevScrollPosition = currentScrollPosition;
});