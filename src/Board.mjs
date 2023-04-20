export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.createEmptyBoard();
    this.fallingBlock = null;
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

    return emptyBoard;
  }

  drop(block) {
    if (this.hasFalling()) throw new Error("already falling");

    this.fallingBlock = { block, row: 0, col: 1 };
  }

  fallingBlockHitsFloor(row) {
    return row === this.height - 1;
  }

  fallingBlockHitsStationary(row, col) {
    return this.getBlockAt(row + 1, col) !== Board.EMPTY;
  }

  fallOneRow() {
    this.fallingBlock.row++;
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

  isColliding(row, col) {
    return (
      this.fallingBlockHitsFloor(row) ||
      this.fallingBlockHitsStationary(row, col)
    );
  }

  tick() {
    const { block, row, col } = this.fallingBlock;

    if (!this.isColliding(row, col)) {
      this.fallOneRow();
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
