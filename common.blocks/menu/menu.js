let prevScrollPosition = $(window).scrollTop();
let pevLowerScrollPosition = null;
$(window).on("scroll", function() {
  let currentScrollPosition = $(window).scrollTop();
  
  if(currentScrollPosition > 100) {
    if(prevScrollPosition > currentScrollPosition && prevLowerScrollPosition == null) {
      prevLowerScrollPosition = currentScrollPosition;
    }
    
    else if(prevScrollPosition <= currentScrollPosition) {
      prevLowerScrollPosition = null;
      
      $(".menu").css({ "top": "-100px", "left": "0" });
    }
    
    if(currentScrollPosition - prevLowerScrollPosition <= -300 && prevLowerScrollPosition != null)
      $(".menu").css({ "top": "0", "left": "0" });
  }
  
  else if(currentScrollPosition <= 100)
    $(".menu").css({ "top": "0", "left": "0" });
  
  prevScrollPosition = currentScrollPosition;
});