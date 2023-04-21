export class RotatingShape {
  constructor(shape) {
    this.shape = this.createPiece(shape);
  }

  createPiece(shape) {
    return shape.split("\n").map((piece) => piece.trim().split(""));
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }

  rotateRight() {
    const rotatedShape = structuredClone(this.shape);

    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        rotatedShape[col][this.shape[row].length - 1 - row] =
          this.shape[row][col];
      }
    }

    const shapeAsString = this.toStringSpecific(rotatedShape);
    console.log(shapeAsString);
    return new RotatingShape(shapeAsString);
  }

  toString() {
    return this.toStringSpecific(this.shape);
  }

  toStringSpecific(piece) {
    let state = "";

    for (let row = 0; row < piece.length; row++) {
      for (let col = 0; col < piece[row].length; col++) {
        state += piece[row][col];
      }

      state += "\n";
    }

    state = state.trim();
    state += "\n";

    return state;
  }
}
