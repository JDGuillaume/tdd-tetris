export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  static EMPTY = ".";
  static SPACE = "\n";

  toString() {
    let state = "";

    for (let rows = 0; rows < this.height; rows++) {
      for (let cols = 0; cols < this.width; cols++) {
        state += Board.EMPTY;
      }

      state += Board.SPACE;
    }

    return state;
  }
}
