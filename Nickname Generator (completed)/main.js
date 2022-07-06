//Variables from HTML
let firstN = document.getElementById("First");
let lastN = document.getElementById("Last");
let randomBtn = document.getElementById("Random");
let allBtn = document.getElementById("All");
let nickname = document.getElementById("Output");
let all = document.getElementById("OutputAll");

// Event Listeners
randomBtn.addEventListener("click", randomBtnclicked);
allBtn.addEventListener("click", allBtnclicked);

//When Random Button Clicked
function randomBtnclicked() {
  //Inputs
  let slot1 = firstN.value;
  let slot2 = lastN.value;

  //Ouput
  nickname.innerHTML =
    slot1 + " " + nicknames[randomInt(0, nicknames.length)] + " " + slot2;
}

//When All Button Clicked
function allBtnclicked() {
  //Inputs
  let slot1 = firstN.value;
  let slot2 = lastN.value;

  //Outputs
  let divStr = "";
  for (let i = 0; i < nicknames.length; i++) {
    divStr += slot1 + " " + nicknames[i] + " " + slot2 + "<br>";
  }
  all.innerHTML = divStr;
}

//Arrays
let nicknames = ["Goose", "Maverick", "Iceman", "Rooster", "Hangman"];

//Randomize
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
