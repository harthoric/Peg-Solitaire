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
    haystack.forEach((element) => {
        if (element === needle) {
            return true;
        }
    });
    return false;
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

        this.validMoves = [[4,4]];
    }

    render() {
        let table = document.createElement('table');
        this.board.forEach((row, rowIndex) => {
            let tr = document.createElement('tr');
            row.forEach((column, columnIndex) => {
                let td = document.createElement('td');
                let space = document.createElement('div');
                space.className = 'space';
                console.log(rowIndex,columnIndex);
                if (arrayIncludes([rowIndex, columnIndex], this.validMoves)) {  // Space to move to.
                    space.style.backgroundColor = colour(2);
                    alert(1);
                } else {
                    space.style.backgroundColor = colour(column);
                }
                td.appendChild(space);
                tr.appendChild(td)
            });
            table.appendChild(tr);
        });
        this.container.innerHTML = '';
        this.container.appendChild(table)
    }
}

window.onload = function () {
    let board = new Board();
    board.render();
};