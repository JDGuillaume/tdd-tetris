export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.fallingBlock = null;
  }

  static EMPTY = ".";
  static SPACE = "\n";

  drop(block) {
    if (this.hasFalling()) throw new Error("already falling");

    this.fallingBlock = { block, row: 0, col: 1 };
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
    this.fallingBlock.row++;
  }

  toString() {
    let state = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        state += this.hasFallingAt(row, col)
          ? this.fallingBlock.block
          : Board.EMPTY;
      }

      state += Board.SPACE;
    }

    return state;
  }
}
