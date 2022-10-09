//declare elements for dom manipulation

const cellEl = document.querySelectorAll("[data-cell]");
const creditsEl = document.getElementById("credits");
const currentBetBox = document.getElementById("currentBet");
const messageBoxEl = document.getElementById("messageBox");

const resetBut = document.getElementById("resetButton");
const minBetBut = document.getElementById("minBet");
const lowerBetBut = document.getElementById("lowerBet");
const raiseBetBut = document.getElementById("raiseBet");
const maxBetBut = document.getElementById("maxBet");
const spinBut = document.getElementById("spinButton");

var currentBet = 25;
var maxBet = 50;
var minBet = 1;
var currentCred = 1000;
var winnings = 0;

resetBut.addEventListener("click", resetPage);

let symbols = [
  {
    name: "sym1",
    ptMulti: 6,
  },
  {
    name: "sym2",
    ptMulti: 4,
  },
  {
    name: "sym3",
    ptMulti: 3,
  },
  {
    name: "sym4",
    ptMulti: 2,
  },
  {
    name: "sym5",
    ptMulti: 1,
  },
];

// let symIndex = Math.floor(Math.random() * symbols.length);
// console.log(symIndex);

const winCondition = [3, 4, 5];

creditsEl.innerText = `${currentCred}`;
currentBetBox.innerText = `${currentBet}`;

//function to initialize game

function initialize() {
  spinBut.addEventListener("click", spin);
  cellEl.forEach((cell) => {
    cell.classList.remove(
      symbols[0].name,
      symbols[1].name,
      symbols[2].name,
      symbols[3].name,
      symbols[4].name
    );
  });
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

//function to accept bet and lower credits

function updateCreds() {
  currentCred = currentCred - currentBet;
  creditsEl.innerText = `${currentCred}`;
}

//function to calculate winnings

function calcWinnings() {
  if (checkForWin(win1)) {
    winnings = currentBet * symbols[0].ptMulti;
    currentCred = currentCred + winnings;
    creditsEl.innerText = `${currentCred}`;
    messageBoxEl.innerText = `Congratulations! You won ${winnings} credits!`;
  } else if (checkForWin2(win2)) {
    winnings = currentBet * symbols[1].ptMulti;
    currentCred = currentCred + winnings;
    creditsEl.innerText = `${currentCred}`;
    messageBoxEl.innerText = `Congratulations! You won ${winnings} credits!`;
  } else if (checkForWin3(win3)) {
    winnings = currentBet * symbols[2].ptMulti;
    currentCred = currentCred + winnings;
    creditsEl.innerText = `${currentCred}`;
    messageBoxEl.innerText = `Congratulations! You won ${winnings} credits!`;
  } else if (checkForWin4(win4)) {
    winnings = currentBet * symbols[3].ptMulti;
    currentCred = currentCred + winnings;
    creditsEl.innerText = `${currentCred}`;
    messageBoxEl.innerText = `Congratulations! You won ${winnings} credits!`;
  } else if (checkForWin5(win5)) {
    winnings = currentBet * symbols[4].ptMulti;
    currentCred = currentCred + winnings;
    creditsEl.innerText = `${currentCred}`;
    messageBoxEl.innerText = `Congratulations! You won ${winnings} credits!`;
  } else {
    messageBoxEl.innerText = `Better luck next Spin!`;
  }
}
//function to assign cells random classes

function assignCells() {
  cellEl.forEach((cell) => {
    cell.classList.remove(
      symbols[0].name,
      symbols[1].name,
      symbols[2].name,
      symbols[3].name,
      symbols[4].name
    );
    cell.classList.add(
      symbols[Math.floor(Math.random() * symbols.length)].name
    );
  });
}

//function to spin slots

spinBut.addEventListener("click", spin);

function spin() {
  assignCells();
  updateCreds();
  checkForWin(win1);
  checkForWin(win2);
  checkForWin(win3);
  checkForWin(win4);
  checkForWin(win5);
  calcWinnings();
  endMatch(currentCred);
}

//function to check for wins

let win1 = symbols[0].name;
let win2 = symbols[1].name;
let win3 = symbols[2].name;
let win4 = symbols[3].name;
let win5 = symbols[4].name;

function checkForWin(win1) {
  return winCondition.every((index) => {
    return cellEl[index].classList.contains(win1);
  });
}
function checkForWin2(win2) {
  return winCondition.every((index) => {
    return cellEl[index].classList.contains(win2);
  });
}
function checkForWin3(win3) {
  return winCondition.every((index) => {
    return cellEl[index].classList.contains(win3);
  });
}
function checkForWin4(win4) {
  return winCondition.every((index) => {
    return cellEl[index].classList.contains(win4);
  });
}
function checkForWin5(win5) {
  return winCondition.every((index) => {
    return cellEl[index].classList.contains(win5);
  });
}

//function to end match if out of credits

function endMatch(currentCred) {
  if (currentCred <= 0) {
    messageBoxEl.innerText = `GAME OVER! YOU ARE BROKE!`;
    spinBut.removeEventListener("click", spin);
  }
}

//function to reset page

function resetPage() {
  window.location.reload();
}
