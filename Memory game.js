const gameContainer = document.getElementById("game");
const matched = document.getElementsByClassName("matched");
let isActivelyProcessing = false;
const clicked = document.getElementsByClassName("clicked");
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(color);
    gameContainer.append(newDiv);
    if (!isActivelyProcessing){
      newDiv.addEventListener("click", handleCardClick);
    } 
    
  }
}
// when the DOM loads
document.addEventListener("DOMContentLoaded",createDivsForColors(shuffledColors));



// TODO: Implement this function!
function handleCardClick(event) {
// you can use event.target to see which element was clicked
   
    event.target.style.backgroundColor = event.target.className;
    event.target.classList.add('clicked');
      if (clicked.length === 2){
        var success = false;
        let firstClick = clicked.item(0);
        let secondClick = clicked.item(1);
        for (const el of COLORS) {
          //MATCH
          if (firstClick.className.indexOf(el) !== -1 && secondClick.className.indexOf(el) !== -1){
            secondClick.classList.add("matched");
            firstClick.classList.add("matched")
            secondClick.classList.remove('clicked');
            firstClick.classList.remove('clicked');
            count = 0;
            success = true;
            isActivelyProcessing = false;
            //return success
          }
        }
        // NO MATCH
        if (success === false){
          gameContainer.style.pointerEvents = "none";
          setTimeout(function(){
            secondClick.style.removeProperty('background-color');
            firstClick.style.removeProperty ('background-color');
            secondClick.classList.remove('clicked');
            firstClick.classList.remove('clicked');
            gameContainer.style.pointerEvents = "auto";
            },1000
            )
        isActivelyProcessing = false;
        }
      } 

}
    //reset the two cards
      // setTimeout(function(){

      // })
      //I DID IT ABOVE