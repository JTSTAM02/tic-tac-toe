document.addEventListener('DOMContentLoaded', function() {
      const app = document.getElementById('app');
      let currentPlayer = 'X';
      let gameActive = true;
      let moves = 0;
      const tiles = ['', '', '', '', '', '', '', '', ''];

      function createHeading() {
        const app = document.getElementById("app");
        const heading = document.createElement("h1");
        heading.textContent = "Tic-Tac-Toe";
        app.appendChild(heading);
    }

    createHeading();

      function checkWin(player) {
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

        return winningCombos.some(combo => {
          return combo.every(index => tiles[index] === player);
        });
      }


      function restartGame() {
        currentPlayer = 'X';
        gameActive = true;
        moves = 0;
        tiles.fill('');
        Array.from(app.children).forEach(tile => {
          tile.textContent = '';
        });
      }

      function createTile(row, col) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.addEventListener('click', () => handleClick(row * 3 + col));
        return tile;
      }

      const board = document.createElement("div");
      board.classList.add("board");
      for (let row = 0; row < 3; row ++) {
        for (let col = 0; col < 3; col ++) {
        board.appendChild(createTile(row, col));
      }
    }

        app.appendChild(board);

      const restartButton = document.createElement('button');
      restartButton.textContent = 'Restart Game';
      restartButton.addEventListener('click', restartButton);
      app.appendChild(restartButton);
    });

