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
            return 'blue';
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

        this.validMoves = []
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
                  if (column === 1) {
                    this.clickedOn = [columnIndex, rowIndex];
                    this.checkValid();
                  }
                  else if (column == 0)
                    movePeg(columnIndex, rowIndex);
                };
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
        this.validMoves.push(this.clickedOn[0], this.clickedOn[1] + 2)
      else if (this.board[this.clickedOn[0]][this.clickedOn[1] - 1] == 1 && this.board[this.clickedOn[0]][this.clickedOn[1] - 2] == 0)
        this.validMoves.push(this.clickedOn[0], this.clickedOn[1] - 2)
      else if (this.board[this.clickedOn[0] + 1][this.clickedOn[1]] == 1 && this.board[this.clickedOn[0] + 2][this.clickedOn[1]] == 0)
        this.validMoves.push(this.clickedOn[0] + 2, this.clickedOn[1])
      else if (this.board[this.clickedOn[0] - 1][this.clickedOn[1]] == 1 && this.board[this.clickedOn[0] - 2][this.clickedOn[1]] == 0)
        this.validMoves.push(this.clickedOn[0] - 2, this.clickedOn[1])

      console.log(this.validMoves);
    }

    movePeg(spaceX, spaceY) {

    }

}

window.onload = function () {
    let board = new Board();
    board.render();
};
