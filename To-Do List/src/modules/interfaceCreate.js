import exitIcon from '../icons/close.svg';

class Interface {
  static create() {
    const interfaceElement = document.createElement('div');
    interfaceElement.classList.add('dialog');

    const exit = document.createElement('img');
    exit.classList.add('close');
    exit.src = exitIcon;

    interfaceElement.appendChild(exit);

    exit.addEventListener('click', (event) => {
      Interface.delete();
    })

    return interfaceElement;
  }

  static show(interfaceElement) {
    const body = document.querySelector('body');

    // Creamos el overlay que se muestra detrás de la nueva interfaz;
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    body.appendChild(interfaceElement);
    body.appendChild(overlay);
  }

  static delete() {
    const interfaceElement = document.querySelector('.dialog');
    const overlay = document.querySelector('.overlay')

    interfaceElement.classList.add('hidden');
    overlay.classList.add('hidden')
    setTimeout(() => {
      interfaceElement.remove()
      overlay.remove()
    }, 150);
  }
}

export default Interface;