export class Player {
  constructor(name, board, real) {
    this.name = name;
    this.board = board;
    this.alreadyBeaten = [];
    this.real = real;
  }

  generateRandomAttack() {
    let coordinates = null;
    while (!coordinates) {
      const randomRow = Math.floor(Math.random() * this.board.board.length);
      const availableBoxes = this.board.board[randomRow].filter(
        (box) => !this.alreadyBeaten.includes(box)
      );

      if (availableBoxes.length > 0) {
        coordinates =
          availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
      }
    }
    this.alreadyBeaten.push(coordinates);

    console.log(this.alreadyBeaten);
    return coordinates;
  }

  attack(coordinates) {
    if (!this.alreadyBeaten.includes(coordinates)) {
      this.alreadyBeaten.push(coordinates);
      return coordinates;
    }
    return false;
  }
}
