import "./styles.css";
import "normalize.css";
import feather from "feather-icons";
import { gameManager } from "./Classes/gameManager";
import {
  loadContent,
  selectBox,
  showDialog,
  closeDialog,
  showWinner,
  closeWinner,
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
  consoleElement,
  winnerButton,
} from "./domElements";

// addEventListeners
document.addEventListener("DOMContentLoaded", async () => {
  feather.replace();
  loadContent();
  showDialog();

  gridTwo.addEventListener("click", (event) => {
    const target = event.target.closest(".grid-box");
    if (!target) return;

    if (target.classList.contains("unbeaten")) {
      console.log(target);
      attackBox(gameManager.player, gameManager.ai, target);
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
      const box = gridOne.querySelector(`#${coordinates}`);
      attackBox(gameManager.ai, gameManager.player, box);
    }, 1500); // 1.5-second delay
  }
});

document.addEventListener("gameConsoleUpdate", (event) => {
  const { message } = event.detail;

  const newLog = consoleElement.querySelector("p");
  newLog.textContent = message;

  consoleElement.scrollTop = consoleElement.scrollHeight;
});

winnerButton.addEventListener("click", (event) => {
  event.preventDefault();
  closeWinner();
  loadContent();
  gameManager.initializeGame(gameManager.player.name);
  consoleElement.querySelector("p").textContent = "The game has been restarted";
});

// functions
function attackBox(attacker, target, box) {
  const hit = gameManager.handleAttack(attacker, target, box.id);
  selectBox(box);
  box.classList.add(hit ? "hit" : "missed");

  const result = gameManager.isGameOver();

  if (result) {
    showWinner(result);
  } else {
    gameManager.switchTurn();
  }
}
