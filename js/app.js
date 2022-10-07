//declare elements for dom manipulation

const cellEl = document.querySelectorAll("[data-cell]");
const creditsEl = document.getElementById("credits");
const currentBetBox = document.getElementById("currentBet");

const resetBut = document.getElementById("resetButton");
const minBetBut = document.getElementById("minBet");
const lowerBetBut = document.getElementById("lowerBet");
const raiseBetBut = document.getElementById("raiseBet");
const maxBetBut = document.getElementById("maxBet");
const spinBut = document.getElementById("spinBet");

var currentBet = 25;
var maxBet = 50;
var minBet = 1;
var currentCred = 500;

resetBut.addEventListener("click", initialize);
//

// const symbolsArr = [
//   { name: sym1, rarity: 5, multiplier: 1 },
//   { name: sym2, rarity: 4, multiplier: 1.5 },
//   { name: sym3, rarity: 3, multiplier: 2 },
//   { name: sym4, rarity: 2, multiplier: 3 },
//   { name: sym5, rarity: 1, multiplier: 5 },
// ];

const winCondition = [3, 4, 5];

creditsEl.innerText = `${currentCred}`;
currentBetBox.innerText = `${currentBet}`;

//function to initialize game

function initialize() {
  currentCred = 500;
  currentBet = 25;
  creditsEl.innerText = `${currentCred}`;
  currentBetBox.innerText = `${currentBet}`;
}

//function to set current bet to minimum

minBetBut.addEventListener("click", setMinBet);

function setMinBet() {
  currentBet = 1;
  currentBetBox.innerHTML = `${currentBet}`;
}

//function to set current bet to maximum

maxBetBut.addEventListener("click", setMaxBet);

function setMaxBet() {
  currentBet = 50;
  currentBetBox.innerHTML = `${currentBet}`;
}

// function to lower bet by 1

lowerBetBut.addEventListener("click", lowerBet);

function lowerBet() {
  if (currentBet > 1) {
    currentBet--;
    currentBetBox.innerHTML = `${currentBet}`;
  }
}

//function to raise bet by 1
raiseBetBut.addEventListener("click", raiseBet);
function raiseBet() {
  if (currentBet < 50) {
    currentBet++;
    currentBetBox.innerHTML = `${currentBet}`;
  }
}
/*Variables to assign:
winConditions
loseCondition

Functions to build:
initialize
render
function to generate random number and assign number to index of potential images
function to store current bet amount and display in footer

add eventListeners for each button when clicked*/
