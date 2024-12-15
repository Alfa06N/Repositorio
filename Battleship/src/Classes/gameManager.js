import { Player } from "./player";
import { GameBoard } from "./board";
import { logToConsole } from "./events";

class GameManager {
  constructor() {
    this.player = null;
    this.ai = null;
    this.currentTurn = this.player;
  }

  initializeGame(playerName) {
    this.player = new Player(playerName, true);
    this.ai = new Player("AI", false);

    this.player.board = new GameBoard();
    this.ai.board = new GameBoard();

    this.player.board.placeAllShips();
    this.ai.board.placeAllShips();

    this.currentTurn = this.player;
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === this.player ? this.ai : this.player;
    const turnEvent = new CustomEvent("turnChanged", {
      detail: { currentTurn: this.currentTurn },
    });
    document.dispatchEvent(turnEvent);
  }

  handleAttack(attacker, target, coordinates) {
    const result = target.board.receiveAttack(coordinates);

    if (result.hit) {
      if (result.sunk) {
        logToConsole(`${attacker.name} sunk the ${result.ship}!`);
      } else {
        logToConsole(`${attacker.name} hit a ship at ${coordinates}!`);
      }
    } else {
      logToConsole(`${attacker.name} missed at ${coordinates}.`);
    }

    return result.hit;
  }

  isGameOver() {
    const playerBoard = this.player.board;
    const aiBoard = this.ai.board;

    if (playerBoard.withoutShips()) {
      return `${this.ai.name} has won the game!`;
    } else if (aiBoard.withoutShips()) {
      return `${this.player.name} has won the game!`;
    }

    return false;
  }
}

export const gameManager = new GameManager();
