const board = document.querySelector('.board');
const rows = document.querySelectorAll('.row');
const cells = document.querySelectorAll('.cell');

let matrix = [[],[],[]];
let inputValue = 'X'
let totalMoves = 0;

board.addEventListener('click', (evt) => {
    evt.target.innerHTML = inputValue;
    totalMoves += 1;
    const id = evt.target.id
    inputValue === 'X' ? matrix[id[0]][id[1]] = 1 : matrix[id[0]][id[1]] = 0;
    if (totalMoves > 4) {
        let winner = checkIfPlayerHasWon();
        if (winner) {
            alert(`${winner} has won!!`)
        }
    }
    inputValue === 'X' ? inputValue = 'O' : inputValue = 'X';
});

function checkIfPlayerHasWon() {
    for (let i=0; i<=2; i++) {
        let rowSum = 0
        for (let j=0; j<=2; j++) {
            rowSum += matrix[i][j]
        }
        if (rowSum === 0) return '0'
        else if (rowSum === 3) return 'X'
    }
    for (let j=0; j<=2; j++) {
        let colSum = 0
        for (let i=0; i<=2; i++) {
            colSum += matrix[i][j]
        }
        if (colSum === 0) return '0'
        else if (colSum === 3) return 'X'
    }
    let digSum = 0;
    for (let i=0; i<=2; i++) {
        digSum += matrix[i][i] 
    }
    if (digSum === 0) return '0'
    else if (digSum === 3) return 'X'
    return ''
}