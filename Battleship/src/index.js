import "./styles.css";
import "normalize.css";
import feather from "feather-icons";
import { gameManager } from "./Classes/gameManager";
import {
  loadContent,
  selectBox,
  showDialog,
  closeDialog,
} from "./Classes/interface";
import {
  gridOne,
  gridTwo,
  playerForm,
  playerNameInput,
  errorMessage,
  randomSetupButton,
  startGameButton,
  playerOverlay,
  enemyOverlay,
} from "./domElements";
import { GameBoard } from "./Classes/board";

// addEventListeners
document.addEventListener("DOMContentLoaded", async () => {
  feather.replace();
  loadContent();
  showDialog();

  console.log("Enemy grid", gridTwo);
  gridTwo.addEventListener("click", (event) => {
    const target = event.target.closest(".grid-box");
    if (!target) return;

    if (target.classList.contains("unbeaten")) {
      console.log(target);
      if (gameManager.currentTurn === gameManager.player) {
        const hit = gameManager.handleAttack(
          gameManager.player,
          gameManager.ai,
          target.id
        );

        target.classList.remove("unbeaten");
        target.classList.add("beaten");
        target.classList.add(hit ? "hit" : "missed");

        console.log(`Hitting location: ${target.id}`);

        if (hit) {
          console.log("Nice shot!");
        } else {
          console.log("Better luck next time!");
        }

        // Switch turn after the attack
        gameManager.switchTurn();
      }
    }
  });

  // Function to handle the form submission logic
  function handleFormSubmit() {
    console.log("Submitting form...");
    const inputValue = playerNameInput.value.trim();

    if (inputValue === "") {
      errorMessage.textContent = "This field is required";
      errorMessage.classList.add("visible");
      playerNameInput.classList.add("invalid");
      return;
    }

    errorMessage.textContent = "";
    errorMessage.classList.remove("visible");
    playerNameInput.classList.remove("valid");

    closeDialog();
    gameManager.initializeGame(inputValue);
  }

  startGameButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleFormSubmit();
  });

  playerNameInput.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFormSubmit();
  });
});

document.addEventListener("turnChanged", (event) => {
  const { currentTurn } = event.detail;
  console.log("Changed turn");
  if (currentTurn === gameManager.player) {
    playerOverlay.classList.add("visible");
    enemyOverlay.classList.remove("visible");
  } else {
    playerOverlay.classList.remove("visible");
    enemyOverlay.classList.add("visible");

    // Delay AI attack to simulate turn progression
    setTimeout(() => {
      const coordinates = gameManager.ai.generateRandomAttack();
      const hit = gameManager.handleAttack(
        gameManager.ai,
        gameManager.player,
        coordinates
      );
      const box = gridOne.querySelector(`#${coordinates}`);
      selectBox(box);
      box.classList.add(hit ? "hit" : "missed");

      gameManager.switchTurn(); // Switch back to player after AI's turn
    }, 1000); // 1-second delay
  }
});

// functions
function startGame(playerName) {}
