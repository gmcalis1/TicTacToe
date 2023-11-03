
//module that keeps track of player information
const players = (function () {

    let turnDisplay = document.querySelector('.turnDisplay');
    let player1Name;
    let player2Name;

    const changeTurnDisplay = function(){
        if(playerTurn == 0){
            turnDisplay.innerHTML = "It is " + player2Name + "'s turn";
            console.log(turnDisplay.innerHTML)
        }
        else{
            turnDisplay.innerHTML = "It is " + player1Name + "'s turn";
        }
    }

    const saveNames = function(){
        player1Name = document.getElementById('player1Entry').value
        player2Name = document.getElementById('player2Entry').value
    }

    const getP1 = function(){
        return player1Name
    }
    const getP2 = function(){
        return player2Name
    }

    //keeps track of whos turn it is (0 is X, 1 is for O)
    let playerTurn = 0;

    //returns state of playerTurn
    const checkTurn = function(){
        return playerTurn;
    }

    //function that changes playerTurn to change turns
    const changeTurn = function(){
        if(playerTurn == 0){
            playerTurn++;
        }
        else{
            playerTurn--;
        }
        changeTurnDisplay();
    }

    //activates module functions and variables
    return {
        changeTurn,
        checkTurn,
        saveNames,
        changeTurnDisplay,
        getP1,
        getP2
    }
})();

//module that displays and updates the game board
const gameBoard = (function () {

    //array that keeps track of the board state
    const boardArray = ['','','','','','','','','']
    let board = document.querySelector('table');
    displayBoard();

    //function that changes square on the grid to change to either X or O
    //depending on the playerTurn variable in the players module
    function changeSquare(index){
        if(players.checkTurn() == 0 && boardArray[index] == ''){
            boardArray[index] = 'X'
            displayBoard();
            gameFlow.checkWinner(boardArray)
            players.changeTurn();
            return
        }
        else if(players.checkTurn() == 1 && boardArray[index] == ''){
            boardArray[index] = 'O'
            displayBoard();
            gameFlow.checkWinner(boardArray)
            players.changeTurn();
            return
        }
    }

    //displays board according to boardArray
    function displayBoard(){
        //displays table of boardArray in console for referencing/debugging
        console.table(boardArray);
        clearBoard();

        //creates 3 rows and fills them with squares
        for(i = 0; i < boardArray.length; i++){
            if(i == 0 ||i == 3 || i == 6){
                addRow();
            }
            let lastRow = board.rows[board.rows.length - 1]
            lastRow.appendChild(addSquare(i))
        }
        function addSquare(index){
            let square = document.createElement('td');
            square.setAttribute('id', index)
            square.innerHTML = boardArray[index]
            return square
        }

        //adds event listeners to created squares
        function addEvents(){
            //variables for DOM elements
            let square1 = document.getElementById('0')
            let square2 = document.getElementById('1')
            let square3 = document.getElementById('2')
            let square4 = document.getElementById('3')
            let square5 = document.getElementById('4')
            let square6 = document.getElementById('5')
            let square7 = document.getElementById('6')
            let square8 = document.getElementById('7')
            let square9 = document.getElementById('8')

            //event listeners that listen for clicks on the table squares
            square1.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(0);
                }
            })
            square2.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(1);
                }
            })
            square3.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(2);
                }
            })
            square4.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(3);
                }
            })
            square5.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(4);
                }
            })
            square6.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(5);
                }
            })
            square7.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(6);
                }
            })
            square8.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(7);
                }
            })
            square9.addEventListener('click', (event) =>{
                if(gameFlow.checkStart())
                {
                    changeSquare(8);
                }
            })
        }

        function addRow(){
            let row = document.createElement('tr');
            board.appendChild(row);
        }
        addEvents();
    }

    //clears DOM board
    function clearBoard(){
        console.log('clearBoard activated')
        while(board.firstChild){
            board.removeChild(board.firstChild);
        }
    }

    const resetBoardArray = function(){
        boardArray.splice(0,boardArray.length)
        console.table(boardArray)
        for(i = 0; i < 9; i++){
            boardArray.push('');
        }
        clearBoard();
        displayBoard();
    }
    return{
        changeSquare,
        resetBoardArray
    }
  })();
  
  //module responsible for starting, ending, and restarting the game
  const gameFlow = (function () {
    
    let startButton = document.getElementById('start')
    let restartButton = document.getElementById('restart')
   
    restartButton.addEventListener('click', (event) =>{
        restartGame();
    });

    const restartGame = function(){
        gameBoard.resetBoardArray();
        start = false;
    }

    let start = false;
    startButton.addEventListener('click', (event) =>{
        gameFlow.start = true;
        console.log('start now equals true')
        gameFlow.startGame();
    });

    function startGame(){
        console.log('Game start')
        start = true;
        players.saveNames();
    }
    const tieGame = function(){
        start = false
        alert('The game is a tie!');
    }
    const endGame = function(player){
        start = false
        if(player == 0){
            alert('Player 1 is the winner!')
        }
        else{
            alert('Player 2 is the winner!')
        }
    }
    const checkWinner = function(boardArray){
        const winCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(i = 0; i < winCombinations.length; i++){
            const [a, b, c] = winCombinations[i];
            if(boardArray[a] != '' && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]){
                endGame(players.checkTurn());
                return
            }
        }
        if(boardArray.includes('') == false){
            tieGame();
        }
    }

    const checkStart = function(){
        return start;
    }
    //get game to detect when game ends in win or tie
    //code player name entry

    return{
        checkStart,
        startGame,
        checkWinner
    }

  })();

