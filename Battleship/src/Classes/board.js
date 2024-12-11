export class GameBoard {
  constructor() {
    this.board = this.createBoard();
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
