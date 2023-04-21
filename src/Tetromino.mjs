import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(piece) {
    this.piece = new RotatingShape(piece);
  }

  static T_SHAPE = new Tetromino(
    `.T.
     TTT
     ...`
  );

  rotateLeft() {
    return this.piece.rotateLeft();
  }

  rotateRight() {
    return this.piece.rotateRight();
  }

  toString() {
    return this.piece.toString();
  }
}
