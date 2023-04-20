export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.fallingBlock = null;
    this.board = null;

    this.createEmptyBoard();
  }

  static EMPTY = ".";
  static SPACE = "\n";

  createEmptyBoard() {
    const emptyBoard = [];

    for (let row = 0; row < this.height; row++) {
      const preparedRow = [];

      for (let col = 0; col < this.width; col++) {
        preparedRow.push(Board.EMPTY);
      }

      emptyBoard.push(preparedRow);
    }

    this.board = emptyBoard;
  }

  drop(block) {
    if (this.hasFalling()) throw new Error("already falling");

    this.fallingBlock = { block, row: 0, col: 1 };
  }

  getBlockAt(row, col) {
    if (this.hasFallingAt(row, col)) {
      return this.fallingBlock.block;
    } else {
      return this.board[row][col];
    }
  }

  hasFalling() {
    return this.fallingBlock !== null;
  }

  hasFallingAt(row, col) {
    return (
      this.hasFalling() &&
      (row === this.fallingBlock.row) & (this.fallingBlock.col === col)
    );
  }

  tick() {
    const { block, row, col } = this.fallingBlock;

    if (
      row !== this.height - 1 &&
      this.getBlockAt(row + 1, col) === Board.EMPTY
    ) {
      this.fallingBlock.row++;
    } else {
      this.board[row][col] = block;
      this.fallingBlock = null;
    }
  }

  toString() {
    let state = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        state += this.getBlockAt(row, col);
      }

      state += Board.SPACE;
    }

    return state;
  }
}
