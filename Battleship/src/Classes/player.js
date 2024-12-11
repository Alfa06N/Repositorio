export class Player {
  constructor(name, board, real) {
    this.name = name;
    this.board = board;
    this.alreadyBeaten = [];
    this.real = real;
  }

  randomAttack() {
    let coordinates = null;
    while (!coordinates) {
      // Select a random row of the board
      const randomRow = Math.floor(Math.random() * this.board.board.length);
      // Filter the available boxes of the row
      const availableBoxes = this.board.board[randomRow].filter(
        (box) => !this.alreadyBeaten.includes(box)
      );
      // Select one random box
      if (availableBoxes.length > 0) {
        coordinates =
          availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
      }
    }
    this.attack(coordinates);
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
