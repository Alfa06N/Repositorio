import Items from "./ItemsCreate";
import NavigationManager from "./navigation";
import DataManager from "./storage";

class ContainerInterface {
  static createContainer() {
    const container = document.createElement('section');
    container.classList.add('containerList');
    document.querySelector('.content').appendChild(container);
    return container;
  }

  static removeContainer() {
    const container = document.querySelector('.containerList');
    if (container) {
      container.classList.add('hidden');
      setTimeout(() => container.remove(), 150);
    }
  }
}

class ContainerManager {
  static resetContainer() {
    ContainerInterface.removeContainer()
    setTimeout(() => ContainerInterface.createContainer(), 150);
  }

  static fillContainer() {
    // Obtener la página en la que está actualmente
    const selected = NavigationManager.getSelected();

    // Obtener los datos filtrados según la página
    const data = DataManager.filterByClass(selected);

    // Actualizamos el contenedor
    ContainerManager.resetContainer();
    
    setTimeout(() => {
      const container = document.querySelector('.containerList');
      if (data.length === 0) {
        ContainerManager.renderEmptyMessage(container)
      } else {
        ContainerManager.renderItems(container, data)
      }
    }, 200);
    
  }

  static renderEmptyMessage(container) {
    const h1 = document.createElement('h1');
    h1.textContent = 'There\'s nothing to show.';
    h1.classList.add('nothing');
    container.appendChild(h1);
  }

  static renderItems(container, data) {
    const items = Items.createItems(data);
    for (const item of items) {
      container.appendChild(item);
    }
    Items.optionEvents();
  }
}

export default ContainerManager;