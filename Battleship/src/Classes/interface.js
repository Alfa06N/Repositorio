import { GameBoard } from "./board";
import { gridOne, gridTwo } from "../domElements";

export function loadContent() {
  const newBoard = new GameBoard();

  function fillGrid(grid) {
    const gridBoxes = grid.querySelectorAll(".grid-box");
    gridBoxes.forEach((gridBox) => {
      gridBox.remove();
    });

    for (let boardRow of newBoard.board) {
      for (let value of boardRow) {
        const box = document.createElement("div");
        box.className = "grid-box unbeaten";
        box.setAttribute("id", `${value}`);
        grid.appendChild(box);
      }
    }
  }

  fillGrid(gridOne);
  fillGrid(gridTwo);
}

export function selectBox(box) {
  console.log(box);
  box.classList.replace("unbeaten", "beaten");
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

export function showWinner(winner) {
  const dialog = document.querySelector(".dialog-winner");
  dialog.querySelector("h1").textContent = winner;
  dialog.classList.add("visible");
}

export function closeWinner() {
  const dialog = document.querySelector(".dialog-winner");
  dialog.classList.remove("visible");
}
