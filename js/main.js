document.addEventListener('DOMContentLoaded', function() {
      const app = document.getElementById('app');

      let moves = 0;
      
      function createHeading() {
        const app = document.getElementById("app");
        const heading = document.createElement("h1");
        heading.textContent = "Tic-Tac-Toe";
        app.appendChild(heading);
    }

    createHeading();

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

      function createTile(row, col) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
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

