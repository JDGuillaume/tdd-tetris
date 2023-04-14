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
    this.fallingBlock = block;
  }

  hasFalling() {
    return this.fallingBlock !== null;
  }

  hasFallingAt(row, col) {
    return this.hasFalling() && (row === 0) & (col === 1);
  }

  toString() {
    let state = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        state += this.hasFallingAt(row, col) ? this.fallingBlock : Board.EMPTY;
      }

      state += Board.SPACE;
    }

    return state;
  }
}
