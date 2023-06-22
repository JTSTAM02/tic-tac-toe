document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('app');
  let currentPlayer = "X";

  function createHeading() {
    const app = document.getElementById("app");
    const heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    app.appendChild(heading);
    const beginGame = document.createElement("button");
    beginGame.textContent = "Click Here to Begin";
    beginGame.addEventListener("click", displayBoard);
    app.appendChild(beginGame);
  }
  createHeading();

// creates board with rows and columns then creates tiles and displays them
function displayBoard() {  
const board = document.createElement("div");
  board.classList.add("board");
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      board.appendChild(createTile(row, col));
    }
  }
  function createTile(row, col) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    return tile;
  }
  app.appendChild(board);

  // displays restart button after display of game
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart Game';
  restartButton.addEventListener('click', restartGame);
  app.appendChild(restartButton);

  displaySymbols();
}

  // displays x's and o's
function displaySymbols() {
  const tiles = document.getElementsByClassName("tile");
  for( let i = 0; i< tiles.length; i ++) {
    tiles[i].addEventListener("click", function () {
      if(this.textContent === "") {
        this.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    })
  }
}

// logic for restart button above
function restartGame() {
  const tiles = document.getElementsByClassName('tile');
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].textContent = '';
  }
  currentPlayer = 'X';
}


function checkForWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
}

function checkForTie(){
  if (displayBoard != winningCombos) {
    alert(`It's a tie! Click "Restart Game" to try again`);
  }
}

});

