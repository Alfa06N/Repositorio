export class Ship {
  constructor(name, size, coordinates) {
    this.name = name;
    this.size = size;
    this.hit = 0;
    this.coordinates = coordinates;
    this.sunk = false;
  }

  getHit() {
    this.hit += 1;
    this.isSunk();
    return this.hit;
  }

  isSunk() {
    if (this.size === this.hit) {
      this.sunk = true;
      return `The ${this.name} ship is sunk!`;
    }
    return false;
  }
}

export const ships = {
  Carrier: 5,
  Battleship: 4,
  Destroyer: 3,
  Submarine: 3,
  "Patrol Boat": 2,
};
