let element = null;
let elementParent = null;
let event = null;
document.addEventListener("touchstart", function(e) {
  element = e.target;
  
  if(element.classList[0] == "icon_size_pull") {
    event = e;
    
    elementParent = element.parentElement.parentElement.parentElement.parentElement;
    elementParent.classList.add("game-card_pre-pull");
    
    scrollLock.disablePageScroll();
  }
  
  if(element.classList[0] == "game-card__tablet-pull") {
    event = e;
    
    elementParent = element.parentElement.parentElement.parentElement;
    elementParent.classList.add("game-card_pre-pull");
    
    scrollLock.disablePageScroll();
  }
});

let moveDelta = null;
document.addEventListener("touchmove", function(e) {
  if(element.classList[0] == "icon_size_pull")
    if(event)
      moveDelta = e.touches[0].pageY - event.touches[0].pageY;
  
  if(element.classList[0] == "game-card__tablet-pull") {
    if(event)
      moveDelta = e.touches[0].pageY - event.touches[0].pageY;
  }
});

document.addEventListener("touchend", function(e) {
  if(element.classList[0] == "icon_size_pull") {
    if(moveDelta && moveDelta < 0) {
      elementParent.classList.add("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }

    else {
      elementParent.classList.remove("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }
    
    scrollLock.enablePageScroll();
  }
  
  if(element.classList[0] == "game-card__tablet-pull") {
    if(moveDelta && moveDelta < 0) {
      elementParent.classList.add("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }

    else {
      elementParent.classList.remove("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }
    
    scrollLock.enablePageScroll();
  }
});