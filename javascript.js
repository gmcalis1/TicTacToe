
//module that keeps track of player information
const players = (function () {

    //keeps track of whos turn it is (0 is X, 1 is for O)
    let playerTurn = 0;

    //function that changes playerTurn to change turns
    function changeTurn(){
        if(playerTurn == 0){
            playerTurn++;
        }
        else{
            playerTurn--;
        }
    }

    //activates module functions and variables
    return {
        playerTurn,
        changeTurn
    }
})();

//module that displays and updates the game board
const gameBoard = (function () {

    //array that keeps track of the board state
    const boardArray = ['','','','','','','','','']
    let board = document.querySelector('table');
    displayBoard();

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
        changeSquare(0);
    })
    square2.addEventListener('click', (event) =>{
        changeSquare(1);
    })
    square3.addEventListener('click', (event) =>{
        changeSquare(2);
    })
    square4.addEventListener('click', (event) =>{
        changeSquare(3);
    })
    square5.addEventListener('click', (event) =>{
        changeSquare(4);
    })
    square6.addEventListener('click', (event) =>{
        changeSquare(5);
    })
    square7.addEventListener('click', (event) =>{
        changeSquare(6);
    })
    square8.addEventListener('click', (event) =>{
        changeSquare(7);
    })
    square9.addEventListener('click', (event) =>{
        changeSquare(8);
    })

    //function that changes square on the grid to change to either X or O
    //depending on the playerTurn variable in the players module
    function changeSquare(index){
        console.log('changeSquare activate')
        if(players.playerTurn == 0 && boardArray[index] == ''){
            boardArray[index] = 'X'
            players.changeTurn();
            displayBoard();
            return
        }
        else if(players.playerTurn == 1 && boardArray[index] == ''){
            boardArray[index] = 'O'
            players.changeTurn();
            displayBoard();
            return
        }
    }

    //displays board according to boardArray
    function displayBoard(){
        //displays table of boardArray in console for referencing/debugging
        console.table(boardArray);

        clearBoard();

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

        function addRow(){
            let row = document.createElement('tr');
            board.appendChild(row);
        }

    }

    function clearBoard(){
        console.log('clearBoard activated')
        while(board.firstChild){
            board.removeChild(board.firstChild);
        }
    }
   return{
    square1,
    board
   }
  })();
  
  const gameFlow = (function () {
    let startButton = document.getElementById('start')
    let start = false;
    startButton.addEventListener('click', (event) =>{
        start = true;
    });

    while(start = true){

    }


    //get game to keep going after starting game
    //get game to detect when game ends in win or tie
    //code player name entry



  })();

