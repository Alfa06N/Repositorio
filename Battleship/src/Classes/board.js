import { ships, Ship } from "./ship";

export class GameBoard {
  constructor() {
    this.board = this.createBoard();
    this.ships = [];
    this.shipCoordinates = new Set();
  }

  receiveAttack(coordinates) {
    if (this.shipCoordinates.has(coordinates)) {
      this.ships.forEach((ship) => {
        if (ship.coordinates.includes(coordinates)) {
          ship.getHit();
          if (ship.isSunk()) {
            console.log(`The ${ship.name} is sunk!`);
            return { hit: true, sunk: true, ship };
          }
        }
      });
      return { hit: true, sunk: false };
    }

    return { hit: false, sunk: false };
  }

  isPlacementValid(start, direction, size) {
    const [startX, startY] = [start[0], parseInt(start[1])];
    console.log(start[0], start[1]);
    const xAxis = "ABCDEFGHIJ";
    const xIndex = xAxis.indexOf(startX);

    for (let i = 0; i < size; i++) {
      const x = direction === "horizontal" ? xAxis[xIndex + i] : startX;
      const y = direction === "vertical" ? startY + i : startY;

      if (!x || y > 10 || this.shipCoordinates.has(`${x}${y}`)) {
        return false;
      }
    }
    return true;
  }

  placeShipRandomly(name, size) {
    const directions = ["horizontal", "vertical"];
    let placed = false;

    while (!placed) {
      const direction =
        directions[Math.floor(Math.random() * directions.length)];
      const xAxis = "ABCDEFGHIJ";
      const startX = xAxis[Math.floor(Math.random() * xAxis.length)];
      const startY = Math.floor(Math.random() * 10) + 1;
      const start = `${startX}${startY}`;

      if (this.isPlacementValid(start, direction, size)) {
        const coordinates = [];
        const xIndex = xAxis.indexOf(startX);

        for (let i = 0; i < size; i++) {
          const x = direction === "horizontal" ? xAxis[xIndex + i] : startX;
          const y = direction === "vertical" ? startY + i : startY;

          const position = `${x}${y}`;
          coordinates.push(position);
          this.shipCoordinates.add(position);
        }

        this.ships.push(new Ship(name, size, coordinates));
        placed = true;
      }
    }
  }

  placeAllShips() {
    for (const [name, size] of Object.entries(ships)) {
      this.placeShipRandomly(name, size);
    }
  }

  createBoard() {
    const newBoard = [];
    const xAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let character of xAxis) {
      const newList = [];
      for (let number of yAxis) {
        newList.push([character, number]);
      }
      newBoard.push(newList);
    }
    return newBoard;
  }
}
