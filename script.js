let x = 0;
let O = 0;
var id = null;
var row = null;
var col = null;
let matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function SetX(button) {
    Draw();
    console.log(matrix);

    if (button.innerHTML === "O" || button.innerHTML === "X") {
        return;
    }

    if (x === 1) {
        button.innerHTML = "O";
        O++;
        x = 0;
        button.style.color = "blue";
        id = button.id;
        row = parseInt(id.charAt(0));
        col = parseInt(id.charAt(1));
        matrix[row][col] = 0;
        Draw();
        OWins();
        return;
    } else {
        x++;
        button.innerHTML = "X";
        button.style.color = "red";
        id = button.id;
        row = parseInt(id.charAt(0));
        col = parseInt(id.charAt(1));
        matrix[row][col] = 1;
        O = 0;
        Draw();
        Xwins();
        return;
    }
}

function resetGame() {
    document.querySelector('.ss').style.display = "none";
    document.querySelector('.winner-overlay').style.display = "none";

    const buttons = document.querySelectorAll(".cell");
    buttons.forEach(button => {
        button.innerHTML = "";
    });

    matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}

function Draw() {
    if (matrix.every(row => row.every(cell => cell !== null))) {
        document.querySelector('.ss').style.display = "flex";
        document.querySelector('.ss').innerHTML = "DRAW";
        document.querySelector('.ss').style.color = "gray";

        // Show overlay for draw
        document.querySelector('.winner-overlay').style.display = "flex";
        document.querySelector('.winner-text').innerHTML = "DRAW!";
        document.querySelector('.winner-text').style.color = "gray";

        setTimeout(resetGame, 2000); 
    }
}

function Xwins() {
    if ((matrix[0][0] === 1 && matrix[0][1] === 1 && matrix[0][2] === 1) ||
        (matrix[1][0] === 1 && matrix[1][1] === 1 && matrix[1][2] === 1) ||
        (matrix[2][0] === 1 && matrix[2][1] === 1 && matrix[2][2] === 1) ||
        (matrix[0][0] === 1 && matrix[1][0] === 1 && matrix[2][0] === 1) ||
        (matrix[0][1] === 1 && matrix[1][1] === 1 && matrix[2][1] === 1) ||
        (matrix[0][2] === 1 && matrix[1][2] === 1 && matrix[2][2] === 1) ||
        (matrix[0][0] === 1 && matrix[1][1] === 1 && matrix[2][2] === 1) ||
        (matrix[0][2] === 1 && matrix[1][1] === 1 && matrix[2][0] === 1)) {

        document.querySelector('.ss').style.display = "flex";
        document.querySelector('.ss').innerHTML = "X wins";
        document.querySelector('.ss').style.color = "red";

      
        document.querySelector('.winner-overlay').style.display = "flex";
        document.querySelector('.winner-text').innerHTML = "X Wins!";
        document.querySelector('.winner-text').style.color = "red";

        setTimeout(resetGame, 2000); 
    }
}

function OWins() {
    if ((matrix[0][0] === 0 && matrix[0][1] === 0 && matrix[0][2] === 0) ||
        (matrix[1][0] === 0 && matrix[1][1] === 0 && matrix[1][2] === 0) ||
        (matrix[2][0] === 0 && matrix[2][1] === 0 && matrix[2][2] === 0) ||
        (matrix[0][0] === 0 && matrix[1][0] === 0 && matrix[2][0] === 0) ||
        (matrix[0][1] === 0 && matrix[1][1] === 0 && matrix[2][1] === 0) ||
        (matrix[0][2] === 0 && matrix[1][2] === 0 && matrix[2][2] === 0) ||
        (matrix[0][0] === 0 && matrix[1][1] === 0 && matrix[2][2] === 0) ||
        (matrix[0][2] === 0 && matrix[1][1] === 0 && matrix[2][0] === 0)) {

        document.querySelector('.ss').style.display = "flex";
        document.querySelector('.ss').innerHTML = "O wins";
        document.querySelector('.ss').style.color = "blue";

     
        document.querySelector('.winner-overlay').style.display = "flex";
        document.querySelector('.winner-text').innerHTML = "O Wins!";
        document.querySelector('.winner-text').style.color = "blue";

        setTimeout(resetGame, 2000); 
    }
}
