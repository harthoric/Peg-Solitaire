function colour(space) {
    switch (space) {
        case -1:
            return 'yellow';
            break;
        case 0:
            return 'white';
            break;
        case 1:
            return 'red';
            break;
        case 2:
            return 'indianred';
            break;
        default:
            return false;
    }
}

function arrayIncludes(needle, haystack) {
    let includes = false;
    haystack.forEach((element) => {
        if (JSON.stringify(element) === JSON.stringify(needle)) {
            includes = true;
        }
    });
    return includes;
}

class Board {
    constructor() {
        // Initial board state
        this.board =
            [
                [-1,-1,-1,-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,1,1,1,-1,-1,-1],
                [-1,-1,-1,1,1,1,-1,-1,-1],
                [-1,1,1,1,1,1,1,1,-1],
                [-1,1,1,1,0,1,1,1,-1],
                [-1,1,1,1,1,1,1,1,-1],
                [-1,-1,-1,1,1,1,-1,-1,-1],
                [-1,-1,-1,1,1,1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1,-1,-1,-1]
            ];

        // Container the board is in.
        this.container = document.getElementById('container');

        this.validMoves = [];
    }

    render() {
        let table = document.createElement('table');
        this.board.forEach((row, rowIndex) => {
            let tr = document.createElement('tr');
            row.forEach((column, columnIndex) => {
                let td = document.createElement('td');
                let space = document.createElement('div');
                space.className = 'space';
                if (arrayIncludes([rowIndex, columnIndex], this.validMoves)) {  // Space to move to.
                    space.style.backgroundColor = colour(2);
                    space.onclick = () => {
                        this.movePeg(rowIndex, columnIndex);
                    }
                } else {
                    space.style.backgroundColor = colour(column);
                    if (column === 1) {
                        space.onclick = () => {
                            this.clickedOn = [columnIndex, rowIndex];
                            this.checkValid();
                        };
                    }
                }
                td.appendChild(space);
                tr.appendChild(td)
            });
            table.appendChild(tr);
        });
        this.container.innerHTML = '';
        this.container.appendChild(table)
    }

    checkValid() {
        this.validMoves = [];
        // UP, DOWN, LEFT, RIGHT
        if (this.board[this.clickedOn[0]][this.clickedOn[1] + 1] == 1 && this.board[this.clickedOn[0]][this.clickedOn[1] + 2] == 0)
            this.validMoves.push([this.clickedOn[0], this.clickedOn[1] + 2])
        else if (this.board[this.clickedOn[0]][this.clickedOn[1] - 1] == 1 && this.board[this.clickedOn[0]][this.clickedOn[1] - 2] == 0)
            this.validMoves.push([this.clickedOn[0], this.clickedOn[1] - 2])
        else if (this.board[this.clickedOn[0] + 1][this.clickedOn[1]] == 1 && this.board[this.clickedOn[0] + 2][this.clickedOn[1]] == 0)
            this.validMoves.push([this.clickedOn[0] + 2, this.clickedOn[1]])
        else if (this.board[this.clickedOn[0] - 1][this.clickedOn[1]] == 1 && this.board[this.clickedOn[0] - 2][this.clickedOn[1]] == 0)
            this.validMoves.push([this.clickedOn[0] - 2, this.clickedOn[1]])

        this.render()
    }
}

window.onload = function () {
    let board = new Board();
    board.render();
};
