let element = null;
let elementParent = null;
let event = null;
document.addEventListener("touchstart", function(e) {
  element = e.target;
  
  if(element.classList[0] == "icon_size_pull") {
    event = e;
    
    elementParent = element.parentElement.parentElement.parentElement.parentElement;
    elementParent.classList.remove("game-card_pull");
    elementParent.classList.add("game-card_pre-pull");
    
    scrollLock.disablePageScroll();
  }
  
  if(element.classList[0] == "game-card__tablet-pull") {
    event = e;
    
    elementParent = element.parentElement.parentElement.parentElement;
    elementParent.classList.remove("game-card_pull");
    elementParent.classList.add("game-card_pre-pull");
    
    scrollLock.disablePageScroll();
  }
});

let moveDelta = null;
let elementChild = null;
document.addEventListener("touchmove", function(e) {
  if(element.classList[0] == "icon_size_pull")
    if(event) {
      moveDelta = e.touches[0].pageY - event.touches[0].pageY;
      
      elementChild = element.parentElement.nextElementSibling.childNodes;
      for(let i = 0; i < elementChild.length; ++i) {
        let elementChildClass = elementChild[i].classList;
        
        if(elementChildClass)
          for(let elementChildClassName of elementChildClass)
            if(elementChildClassName == "hidden")
              elementChild[i].style.minHeight = `${ moveDelta / 10 * -1 }px`;
      }
    }
  
  if(element.classList[0] == "game-card__tablet-pull") {
    if(event) {
      moveDelta = e.touches[0].pageY - event.touches[0].pageY;
      
      elementChild = element.nextElementSibling.childNodes;
      for(let i = 0; i < elementChild.length; ++i) {
        let elementChildClass = elementChild[i].classList;
        
        if(elementChildClass)
          for(let elementChildClassName of elementChildClass)
            if(elementChildClassName == "hidden")
              elementChild[i].style.minHeight = `${ moveDelta / 10 * -1 }px`;
      }
    }
  }
});

document.addEventListener("touchend", function(e) {
  if(element.classList[0] == "icon_size_pull") {
    if(moveDelta && moveDelta < 0) {
      if(elementChild) {
        for(let i = 0; i < elementChild.length; ++i) {
          let elementChildClass = elementChild[i].classList;

          if(elementChildClass)
            for(let elementChildClassName of elementChildClass)
              if(elementChildClassName == "hidden")
                elementChild[i].style.minHeight = "0px";
        }
      }
      
      elementParent.classList.add("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }

    else {
      if(elementChild) {
        for(let i = 0; i < elementChild.length; ++i) {
          let elementChildClass = elementChild[i].classList;

          if(elementChildClass)
            for(let elementChildClassName of elementChildClass)
              if(elementChildClassName == "hidden")
                elementChild[i].style.minHeight = "0px";
        }
      }
      
      elementParent.classList.remove("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }
    
    scrollLock.enablePageScroll();
  }
  
  if(element.classList[0] == "game-card__tablet-pull") {
    if(moveDelta && moveDelta < 0) {
      if(elementChild) {
        for(let i = 0; i < elementChild.length; ++i) {
          let elementChildClass = elementChild[i].classList;

          if(elementChildClass)
            for(let elementChildClassName of elementChildClass)
              if(elementChildClassName == "hidden")
                elementChild[i].style.minHeight = "0px";
        }
      }
      
      elementParent.classList.add("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }
    
    else {
      if(elementChild) {
        for(let i = 0; i < elementChild.length; ++i) {
          let elementChildClass = elementChild[i].classList;

          if(elementChildClass)
            for(let elementChildClassName of elementChildClass)
              if(elementChildClassName == "hidden")
                elementChild[i].style.minHeight = "0px";
        }
      }
      
      elementParent.classList.remove("game-card_pull");
      elementParent.classList.remove("game-card_pre-pull");
    }
    
    scrollLock.enablePageScroll();
  }
});