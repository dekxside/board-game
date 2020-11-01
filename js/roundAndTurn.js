const context = document.querySelector('canvas').getContext('2d');

// Create board
function Board() {
    this.width = 25;
    this.height = 15;
    this.squareBoard = [];

    for (let i = 0; i < this.width; i++) {
        const row = [];
        this.squareBoard.push(row);
        for (let j = 0; j < this.height; j++) {
            const col = {};
            row.push(col);
        }
    }
}

Board.prototype.renderBoard = function() {
    context.canvas.width = 940;
    context.canvas.height = 580;
    
    // keep the square size relative to the canvas size
    let squareWidth = context.canvas.width / this.width;
    let squareHeight = context.canvas.height / this.height;

    for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
            context.beginPath();
            context.strokeStyle = '#bfbfbd';
            context.lineWidth = 1;
            context.strokeRect(i * squareWidth, j * squareHeight, context.canvas.width, context.canvas.height);
            context.closePath();
        }
    }
}

let board = new Board();

board.renderBoard();

// Resize board
function resizeBoard() {

    // htmlCanvas.width = window.innerWidth;
    // htmlCanvas.height = window.innerHeight;
    // resize();
}


function initialize() {
    window.addEventListener('resize', resizeBoard);
    resizeBoard();
}

function resize() {
    context.scale(1, 1);
    context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}