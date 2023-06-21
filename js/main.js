const Game = {
    tiles: Array(9).fill(""),
    playerA: "x",
    playerB: "o",
}

function createGameBoard() {
    const app = document.getElementById("app");
    const heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    app.appendChild(heading);

    const gameBoard = document.createElement("div");
    gameBoard.appendChild(tile);

    for(let i = 0; i < 9; i ++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.addEventListener("click", () => handleTileClick(i));
        gameBoard.appendChild(tile)
    }

    const restart = docment.createElement("button");
    restart.textContent = "Restart Game";
    restart.addEventListener("click", restart);
    app.appendChild(restart);
}
window.addEventListener("load", createGameBoard);