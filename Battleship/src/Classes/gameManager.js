import { Player } from "./player";
import { GameBoard } from "./board";
import { Ship, ships } from "./ship";
import { gridOne } from "../domElements";
import { selectBox } from "./interface";
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

    console.log("Game Initialized!");
    console.log(`Player ${this.player.name}`);
    console.log(`Player Ships:`, this.player.board.ships);
    console.log(`AI Ships:`, this.ai.board.ships);
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
      console.log(`${attacker.name} hit a ship at ${coordinates}!`);
      if (result.sunk) {
        console.log(`${attacker.name} sunk the ${result.ship.name}!`);
      }
    } else {
      console.log(`${attacker.name} missed at ${coordinates}.`);
    }

    return result.hit;
  }

  checkGameState() {}
}

export const gameManager = new GameManager();
