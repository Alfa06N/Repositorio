import { GameBoard } from "./board";
import { gridOne, gridTwo } from "../domElements";

export function loadContent() {
  const gridOne = document.querySelector(".grid.player-grid");
  console.log(gridOne);
  const gridTwo = document.querySelector(".grid.enemy-grid");
  console.log(gridTwo);

  const newBoard = new GameBoard();

  function fillGrid(grid) {
    const gridBoxes = grid.querySelectorAll(".grid-box");
    gridBoxes.forEach((gridBox) => {
      gridBox.remove();
    });

    for (let boardRow of newBoard.board) {
      for (let [rowKey, columnKey] of boardRow) {
        const box = document.createElement("div");
        box.className = "grid-box unbeaten";
        box.setAttribute("id", `${rowKey}${columnKey}`);
        grid.appendChild(box);
      }
    }
  }

  fillGrid(gridOne);
  fillGrid(gridTwo);
}

export function selectBox(box) {
  box.classList.replace("unbeaten", "beaten");
  console.log(box);
}

export function showDialog() {
  const dialog = document.querySelector(".dialog-modal");
  const game = document.querySelector(".game-area");

  game.classList.add("blurred");
  dialog.classList.add("visible");
}

export function closeDialog() {
  const dialog = document.querySelector(".dialog-modal");
  const game = document.querySelector(".game-area");

  game.classList.remove("blurred");
  dialog.classList.remove("visible");
}
