# Tic-Tac-Toe Psuedocode

## MoSCoW

  * Must-Haves: display game board, tiles clickable only once, display winner or tie, restart button
  * Should-Haves: Display player turns, Input bar for player names
  * Could-Haves: Utilize classes for dryer code, way to track number of games played, start/resume games
  * Would-Have (Wish) - Computer to play game against you, Login Options

## Questions
  - How do I ensure the tiles are only clickable once? (more research/sandboxing required)
  - When should players insert their names? (STRETCH GOAL)
  - How does click of tile produce correct symbol? (more research/sandboxing required)
  - How do I ensure system keeps track of number of turns left? (set variable)

### Variables Needed
  - let numOfTurns = 0


## Procedural

### Begin
### Init

  - Create an object named **Turns** that holds within it arrays for player, tiles, and symbols
    * player1: "x";
    * player2: "o";
    * tiles: {1-9};

  - Create the Game Board
    * displays User Interface upon window loading
    * includes player turns (Whose turn it is)
    * include Begin Game button
    * includes restart button
  

  - Login (Would-Have/Wish)
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
-Major object is Turns and holds within it players and their respective symbols, 

- createGameBoard
- displayPlayerTurn
- restart
- displayWinner



## Object-Oriented

const Turns = {
playerA : "x",
playerB : "o",
tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

createGameBoard() {


}


function displayWinner() {
 if(playerA === win || playerB === win) {
 return {player.name} is the winner!
 }
 else {
 return "It's a tie!";
 }
}

restart.addEventListener('onclick') {
createGameBoard();
}


