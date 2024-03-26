import showHome from "./modules/home.js";
import showMenu from "./modules/menu.js";
import showAbout from "./modules/about.js";
import './styles.css';
import background from './images/descarga.jpeg';

class Interface {

  static getSelected() {
    return document.querySelector('.selected');
  }

  static switchSelected(button) {
    const buttonSelected = Interface.getSelected();
    buttonSelected.classList.remove('selected');

    button.classList.add('selected');
  }

  static resetContent() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
  }

  static initEventListener() {
    // Seleccionamos los botones de navegación
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');

    document.addEventListener('DOMContentLoaded', (event) => {
      home.classList.add('selected');
      showHome();
      const body = document.querySelector('body');
      body.style.backgroundImage = background;
    })

    home.addEventListener('click', (event) => {
      event.preventDefault();
      if (!home.classList.contains('selected')) {
        Interface.switchSelected(home);
        Interface.resetContent();
        showHome();
      }
    })

    menu.addEventListener('click', (event) => {
      event.preventDefault();
      if (!menu.classList.contains('selected')) {
        Interface.switchSelected(menu)
        Interface.resetContent();
        showMenu();
      }
    })

    about.addEventListener('click', (event) => {
      event.preventDefault();
      if (!about.classList.contains('selected')) {
        Interface.switchSelected(about);
        Interface.resetContent();
        showAbout();
      }
    })
  }
}

Interface.initEventListener();