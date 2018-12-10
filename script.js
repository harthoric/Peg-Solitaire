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
        default:
            return false;
    }
}

class Board {
    constructor() {
        // Initial board state
        this.board =
            [
                [-1,-1,1,1,1,-1,-1],
                [-1,-1,1,1,1,-1,-1],
                [1,1,1,1,1,1,1],
                [1,1,1,0,1,1,1],
                [1,1,1,1,1,1,1],
                [-1,-1,1,1,1,-1,-1],
                [-1,-1,1,1,1,-1,-1]
            ];

        this.container = document.getElementById('container');
    }

    render() {
        let table = document.createElement('table');
        this.board.forEach((row, rowIndex) => {
            let tr = document.createElement('tr');
            row.forEach((column, columnIndex) => {
                let td = document.createElement('td');
                let space = document.createElement('div');
                space.className = 'space';
                space.style.backgroundColor = colour(column);
                space.onmouseenter = () => {

                };
                space.onmouseleave = () => {

                };
                space.onclick = () => {

                };
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