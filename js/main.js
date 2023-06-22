document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('app');
  let currentPlayer = 'X';
  let gameEnded = false; // used to check for end of game in checkForWin and checkForTie functions later

  let playerXName = 'Player X';
  let playerOName = 'Player O';

  function createHeading() {
    const heading = document.createElement('h1');
    heading.textContent = 'Tic-Tac-Toe';
    app.appendChild(heading);
    const beginGame = document.createElement('button');
    beginGame.textContent = 'Click Here to Begin';
    beginGame.addEventListener('click', function () {
      getPlayerNames();
      displayBoard();
      beginGame.style.display = 'none';
    });
    app.appendChild(beginGame);
  }
  createHeading();

  function getPlayerNames() {
    playerXName = prompt('Enter name for Player X');
    playerOName = prompt('Enter name for Player O');
  }

  function displayBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        board.appendChild(createTile(row, col));
      }
    }

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.addEventListener('click', restartGame);

    app.appendChild(createPlayerNames());
    app.appendChild(createPlayerTurn());
    app.appendChild(board);
    app.appendChild(restartButton);

    displaySymbols();
  }

  function createPlayerTurn() {
    const playerTurn = document.createElement('div');
    playerTurn.classList.add('player-turn');
    const currentPlayerTurn = document.createElement('p');
    currentPlayerTurn.textContent = `${getPlayerName(currentPlayer)}'s turn (${currentPlayer})`;
    currentPlayerTurn.id = "current-player-turn";
    playerTurn.appendChild(currentPlayerTurn);
    return playerTurn;
  }

  function createPlayerNames() {
    const playerNames = document.createElement('div');
    playerNames.classList.add('player-names');

    const playerXLabel = document.createElement('label');
    playerXLabel.textContent = 'Player X: ';
    const playerXInput = document.createElement('input');
    playerXInput.value = playerXName;
    playerXInput.addEventListener('change', function () {
      playerXName = playerXInput.value || 'Player X';
    });
    playerXLabel.appendChild(playerXInput);

    const playerOLabel = document.createElement('label');
    playerOLabel.textContent = 'Player O: ';
    const playerOInput = document.createElement('input');
    playerOInput.value = playerOName;
    playerOInput.addEventListener('change', function () {
      playerOName = playerOInput.value || 'Player O';
    });
    playerOLabel.appendChild(playerOInput);

    playerNames.appendChild(playerXLabel);
    playerNames.appendChild(playerOLabel);

    return playerNames;
  }

  function createTile(row, col) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    return tile;
  }

  function displaySymbols() {
    const tiles = document.getElementsByClassName('tile');
    const currentPlayerTurn = document.getElementById("current-player-turn");

    for (let i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener('click', function () {
        if (!gameEnded && this.textContent === '') {
          this.textContent = currentPlayer;
          checkForWin();
          checkForTie();
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          currentPlayerTurn.textContent = `${getPlayerName(currentPlayer)}'s turn (${currentPlayer})`;
        }
      });
    }

  }

  function restartGame() {
    const tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].textContent = '';
    }
    currentPlayer = 'X';
    gameEnded = false;

    const currentPlayerTurn = document.getElementById('current-player-turn');
    currentPlayerTurn.textContent = `${getPlayerName(currentPlayer)}'s turn (${currentPlayer})`;
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

    // loop through each winning combo
    for (let combo of winningCombos) {
      const [a, b, c] = combo; // checks each individual position
      const tiles = document.getElementsByClassName('tile');
      // checks if tile have the same value (X or O)
      if (
        tiles[a].textContent !== '' &&
        tiles[a].textContent === tiles[b].textContent &&
        tiles[a].textContent === tiles[c].textContent
      ) {
        gameEnded = true; // once game is over, displays winner
        alert(`Congrats, ${getPlayerName(tiles[a].textContent)} wins!`);
        break;
      }
    }
  }

  function checkForTie() {
    const tiles = document.getElementsByClassName('tile');
    let isTie = true;

    // loops through each tile checking for empty tiles
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].textContent === '') {
        isTie = false;
        break;
      }
    }

    // if all tiles are filled and there is no winner, displays a tie
    if (isTie && !gameEnded) {
      gameEnded = true;
      alert(`It's a tie! Click "Restart Game" to try again`);
    }
  }

  function getPlayerName(player) {
    switch (player) {
      case 'X':
        return playerXName;
      case 'O':
        return playerOName;
      default:
        return '';
    }
  }
});