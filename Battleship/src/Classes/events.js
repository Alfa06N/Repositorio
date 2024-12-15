export function logToConsole(message) {
  const consoleEvent = new CustomEvent("gameConsoleUpdate", {
    detail: { message },
  });
  document.dispatchEvent(consoleEvent);
}
