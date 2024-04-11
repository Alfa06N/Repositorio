import { switchClassSelected } from "./globalFunctions";
import HeadManager from "./head";

class NavigationManager {
  static switchSelected(newSelected) {
    let nav = document.querySelector('nav');
    switchClassSelected(nav, newSelected);
    HeadManager.setTitle(newSelected)
  }

  static getSelected() {
    let nav = document.querySelector('nav');
    return document.querySelector('.selected');
  }
}

export default NavigationManager;