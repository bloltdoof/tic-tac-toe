

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
                changePlayer();
                let index = getIndex(box);
                setSign(index[0], index[1]);
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
    // checkWinner : function to check the winner of the game.
    const checkWinner = (board) => {
        let winner = null;

        let winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            let [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                winner = board[a];
            }
        }
        return winner;
    };

    // checkTie : function to check if the game is tie or not.
    const checkTie = (board) => {
        let tie = true;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '') {
                    tie = false;
                }
            }
        }
        return tie;
    };

    return {
        checkWinner,
        checkTie
    };
}
)();


// scoreBoard object of the tic tac toe game with following properties module pattern.
const scoreBoard = (function() {
    let playerXScore = document.getElementById('player-one-score');
    let playerOScore = document.getElementById('player-two-score');
    let drawScore = document.getElementById('draw-score');
    let playerX = 0;
    let playerO = 0;
    let draw = 0;
    
)();



