

//gameBoard object of the tic tac toe game with following properties module pattern.

const gameBoard = (function() {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let currentPlayer = 'X';


    const boxElements = document.querySelectorAll('.box');
    const changePlayer = () => {
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
    };


    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    // setSign : function to set the sign of the current player in the game board.
    const setSign = (rowIndex, colIndex) => {
        board[rowIndex][colIndex] = currentPlayer;
    };

    // getIndex : get the index of the box clicked by the user.
    const getIndex = (box) => {
        let rowIndex = 0;
        let colIndex = 0;
        for (let i = 0; i < boxElements.length; i++) {
            if (boxElements[i] === box) {
                rowIndex = Math.floor(i / 3);
                colIndex = i % 3;
            }
        }
        return [rowIndex, colIndex];
    };



    boxElements.forEach(box => {
        box.addEventListener('click', function() {
            if (box.innerHTML === '') {
                box.innerHTML = getCurrentPlayer();
                
                let index = getIndex(box);
                setSign(index[0], index[1]);
                changePlayer();
            }
        });
    });

    // getBoard : function to get the game board.
    const getBoard = () => {
        return board;
    }

    // resetBoard : function to reset the game board.
    const resetBoard = () => {
        board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }
    //Reset current player to X
    const resetCurrentPlayer = () => {
        currentPlayer = 'X';
    }



    return {
        getBoard,
        getCurrentPlayer,
        resetBoard,
        resetCurrentPlayer

    };
}
)();


//gameLogic object of the tic tac toe game with following properties module pattern.
const gameLogic = (function() {
    
    // checkWinner : checks the winner of the board array.
    const checkWinner = (board) => {
        let winner = null;
        //check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                winner = board[i][0];
            }
        }
        //check columns
        for (let i = 0; i < 3; i++) {
            if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                winner = board[0][i];
            }
        }
        //check diagonals
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            winner = board[0][0];
        }
        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            winner = board[0][2];

        }
        return winner;
    };

    // checkTie : checks board array for tie.
    const checkTie = (board) => {
        let tie = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    tie = false;
                }
            }
        }
        return tie;
    };


    

    // reset : reset board and current player to default.
    const reset = () => {
        gameBoard.resetBoard();
        gameBoard.resetCurrentPlayer();
    }



    return {
        checkWinner,
        checkTie,
        
        reset

    };
}
)();

let playerXScore = document.getElementById('player-one-score');
let playerOScore = document.getElementById('player-two-score');
let drawScore = document.getElementById('draw-score');




// updateScore : function to update the score of the players. If there is a wind or a tie, the score is updated accordingly.Then reset the board.
const updateScore = (winner) => {
    let playerX = 0;
    let playerO = 0;
    let draw = 0;
    if (winner === 'X') {
        playerX++;
        playerXScore.innerHTML = playerX;
        gameLogic.reset();
    } else if (winner === 'O') {
        playerO++;
        playerOScore.innerHTML = playerO;
        gameLogic.reset();
    } else {
        draw++;
        drawScore.innerHTML = draw;
        gameLogic.reset();
    }
    
}












