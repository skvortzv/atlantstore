function isVisibleGameCard(element) {
  let coordinatesElement = element.getBoundingClientRect();
  
  let windowHeight = document.documentElement.clientHeight;
  
  let topVisibleElement = coordinatesElement.top > 0 && coordinatesElement.top < windowHeight;
  
  let bottomVisibleElement = coordinatesElement.bottom < windowHeight && coordinatesElement.bottom > 0;
  
  return topVisibleElement || bottomVisibleElement;
}

function showVisibleGameCard() {
  for(let gameCard of document.getElementsByClassName("game-card")) {
    let dataSrcGameCard = gameCard.dataset.src;
    if(!dataSrcGameCard) continue;
    
    if(isVisibleGameCard(gameCard)) {
      gameCard.style.backgroundImage = `url(${ dataSrcGameCard })`;
    }
    
    else {
      gameCard.style.backgroundImage = "url(../config/img/placeholder.svg)";
    }
  }
}

showVisibleGameCard();
window.onscroll = showVisibleGameCard;