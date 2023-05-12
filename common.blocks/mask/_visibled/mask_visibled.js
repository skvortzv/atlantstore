function maskVisibled() {
  if($(".mask").hasClass("mask_visibled"))
    scrollLock.disablePageScroll(); 
  
  else
    scrollLock.enablePageScroll();
}