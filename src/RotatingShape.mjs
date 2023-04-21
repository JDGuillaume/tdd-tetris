export class RotatingShape {
  constructor(shape) {
    this.shape = this.createPiece(shape);
  }

  createPiece(shape) {
    return shape.split("\n").map((piece) => piece.trim().split(""));
  }

  rotateRight() {
    const rotatedShape = structuredClone(this.shape);

    for (let row = 0; row < rotatedShape.length; row++) {
      for (let col = 0; col < rotatedShape[row].length; col++) {
        rotatedShape[col][rotatedShape.length - 1 - row] = this.shape[row][col];
      }
    }

    this.shape = rotatedShape;
    return this;
  }

  toString() {
    let state = "";

    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        state += this.shape[row][col];
      }

      state += "\n";
    }

    return state;
  }
}
