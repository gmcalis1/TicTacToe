const players = (function () {
    let playerTurn = 0;

    function getTurn(){
        return playerTurn;
    }
    function changeTurn(){
        if(playerTurn == 0){
            playerTurn++;
        }
        else{
            playerTurn--;
        }
    }
})();





const gameBoard = (function () {
    let square1 = document.getElementById('square1')
    let square2 = document.getElementById('square2')
    let square3 = document.getElementById('square3')
    let square4 = document.getElementById('square4')
    let square5 = document.getElementById('square5')
    let square6 = document.getElementById('square6')
    let square7 = document.getElementById('square7')
    let square8 = document.getElementById('square8')
    let square9 = document.getElementById('square9')

    square1.addEventListener('click', (event) =>{
        changeSquare(square1.innerHTML);
    })
    square2.addEventListener('click', (event) =>{
        changeSquare(square2.innerHTML);
    })
    square3.addEventListener('click', (event) =>{
        changeSquare(square3.innerHTML);
    })
    square4.addEventListener('click', (event) =>{
        changeSquare(square4.innerHTML);
    })
    square5.addEventListener('click', (event) =>{
        changeSquare(square5.innerHTML);
    })
    square6.addEventListener('click', (event) =>{
        changeSquare(square6.innerHTML);
    })
    square7.addEventListener('click', (event) =>{
        changeSquare(square7.innerHTML);
    })
    square8.addEventListener('click', (event) =>{
        changeSquare(square8.innerHTML);
    })
    square9.addEventListener('click', (event) =>{
        changeSquare(square9.innerHTML);
    })


    const boardArray = ['','','','','','','','','']

    function changeSquare(square){
        if(players.getTurn() == 0 && square.innerHTML == undefined){
            square.innerHTML = 'X'
            players.changeTurn();
            return
        }
        else if(players.getTurn() == 1 && square.innerHTML == undefined){
            square .innerHTML = 'O'
            players.changeTurn();
            return
        }
    }


    /*
    function addRow(title, author, pages, read){
        let row = document.createElement("tr");
        let c0 = document.createElement('td');
    
        c5.innerHTML = 'Remove';
        c5.classList.add('remove');
        c5.dataset.index = count;
        
        row.appendChild(c5);
        c6 = document.createElement('button');
        c6.innerHTML = 'Change read status';
        c6.classList.add('changeRead')
        c6.dataset.index = count;
        row.appendChild(c6);
        tableBody.appendChild(row);
    }
    */
    function displayBoard(){
        console.table(boardArray);
        clearBoard();
        for(i = 0; i < boardArray.length; i++){
            addRow()
        }
    }
    /*
    function displayLibrary(){
        count = 0;
        console.table(myLibrary);
        clearTable();
        for(i = 0; i < myLibrary.length; i++){
            addRow(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read);
        }
    }
    */

    function clearBoard(){

    }
    /*
    function clearTable(){
        console.log('clear table clicked')
        while(tableBody.firstChild){
            tableBody.removeChild(tableBody.firstChild);
        }
    }
    */
  })();
  

  const gameFlow = (function () {

  })();

