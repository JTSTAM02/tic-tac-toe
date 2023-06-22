# Tic-Tac-Toe Psuedocode

## MoSCoW

  * Must-Haves: display game board, tiles clickable only once, display winner or tie, restart button
  * Should-Haves: Display player turns, Input bar for player names
  * Could-Haves: Utilize classes for dryer code, way to track number of games played, start/resume games
  * Won't-Have (Wish) - Computer to play game against you, Login Options

## Atomic Design Principles
 - Atoms
    * Reset button
    * Play Game button
    * Heading at Top
 - Molecules
    * tiles of game board
    * working functions of both buttons
    * display of player turn underneath major heading
 - Organisms
   *  Functions
   *  Objects
   *  Display


## Questions
  - How do I ensure the tiles are only clickable once? (more research/sandboxing required)
  - When should players insert their names? (STRETCH GOAL)
  - How does click of tile produce correct symbol? (more research/sandboxing required)
  - How do I ensure system keeps track of number of turns left? (set variable)
  - How do I appropriately nest each function to each object?

## Solutions
- Ensure tiles are only clicked once by creating a variable and setting it to clicked tiles (prevent multiple clicks on same tile)
- Have players insert their name after the press of Start Game button
  * After your press Play Game, an input bar will pop up asking for name for player A and then Player B
 - click of tile produces correct symbol based on array of turns **?**
 - set variable for number of turns (see next section)


### Variables Needed
  - let currentPlayer = "X";
  - let gameEnded = false;


## Procedural

### Begin
### Init

  - Create an object named **Game** that holds within it arrays for player, tiles, and how to win
    * player1: "x";
    * player2: "o";
    * tiles: Array(9).fill("");
    * winConditions: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  - Create the Game Board (broken down into heading and tile on js file)
    * displays User Interface upon window loading
    * includes player turns (Whose turn it is)
    * include Begin Game button
    * includes restart button



  - Login (Won't-Have/Wish)
  - Start Game/Resume Session (Could Have)

    ### When Game Begins
  
  - Begin Turns
    * Player takes a turn and selects a Tile
       - upon click of tile, players symbol should display on that tile and stay there for remainder of game
    * System records turn completed-STATE 


  -Check number of turns completed
    IF number of turns less than 10, continue and switch to other player
    IF number of turns is 9, check for win or tie
     
  - Check whose turn it is
    * increment number of turns ++
    * if num of turns % === 0, x goes
    * else o goes
  
  
  -Check for Win
    * check all 8 ways to win (vertically three times, horizontal three times, diagonal two times)
    if any of the 8 are true,  current player wins
    else its a tie
    
 
   
  
### End




## Functional
-Major object is Game and holds within it players and their respective symbols, 

- Game object
- createHeading
- createTiles
- displaySymbols
- displayPlayerTurn
- restartGame
- checkForWin
- checkForTie



## Object-Oriented

const Game = {
tiles: Array(9).fill("");
winConditions: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]] playera || playerb
playerA : "x",
playerB : "o",
moves: loop for win conditions (all 3 same type)
reduce (sum of array in js)
}

createGameBoard() {
 const app = document.getElementById ("app");
 const heading = document.createElement ("h1");
 heading.textContent = ("Tic-Tac-Toe");
 const gameBoard = document.createElement("div");
 app.appendChild(gameBoard);
 .map to create tiles **?**
 const restartButton = document.createElement("button")
 
}

function displayWinner() {
 if(playerA === win || playerB === win) {
 return {player.name} is the winner!
 }
 else {
 return "It's a tie!";
 }
}

function restart() {
createGameBoard();
}

function checkForWin() {
   
}

Function checkForTie() {
     
}
