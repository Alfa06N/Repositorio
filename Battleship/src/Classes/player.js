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
    this.alreadyBeaten.push(coordinates.join(""));
    console.log(this.alreadyBeaten.length);

    return coordinates.join("");
  }

  attack(coordinates) {
    if (!this.alreadyBeaten.includes(coordinates)) {
      this.alreadyBeaten.push(coordinates);
      return coordinates;
    }
    return false;
  }

  getsHit(coordinates) {
    for (let ship of this.ships) {
      if (ship.coordinates.includes(coordinates)) {
        ship.hit();
        const isSunk = ship.isSunk();
        return isSunk ? isSunk : `A ${this.name}'s ship has been hit`;
      }
    }
    return false;
  }

  hasShips() {
    for (let ship of this.ships) {
      if (!ship.sunk) return false;
    }
    return true;
  }
}
