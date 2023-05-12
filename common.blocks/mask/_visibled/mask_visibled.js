function maskVisibled() {
  if($(".mask").hasClass("mask_visibled")) {
    $("body").css("overflow-y", "hidden");
  } 
  
  else {
    $("body").css("overflow-y", "auto");
  }
}