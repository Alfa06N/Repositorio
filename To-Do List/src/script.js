import storage from './modules/storage.js';
import container from './modules/container.js';
import './styles.css';
import dialog from './modules/dialog.js';
import navigation from './modules/navigation.js';

const events = (() => {
  const initEventListeners = () => {
    containerEvents();
    createEvents(); // Bótones para crear nuevo item
    navEvents();
    lateralBarEvents()
  }

  const lateralBarEvents = () => {
    const removeAll = document.querySelector('.removeAll');

    removeAll.addEventListener('click', (event) => {
      event.preventDefault();

      storage.clearData();
      container.updateContainer();
    })
  }

  // Eventos al crear una nueva tarea
  const createEvents = () => {
    const project = document.querySelector('.option.project');
    const task = document.querySelector('.option.task');

    task.addEventListener('click', (event) => {
      dialog.requestData('Task')
    });

    project.addEventListener('click', (event) => {
      dialog.requestData('Project');
    })
  }

  const containerEvents = () => {
    document.addEventListener('DOMContentLoaded', (event) => {
      event.preventDefault();
      container.showPrincipal();
    });
  }

  const navEvents = () => {
    let principal = document.querySelector('.button.principal');
    let task = document.querySelector('.button.task');
    let project = document.querySelector('.button.project');

    principal.addEventListener('click', (event) => {
      event.preventDefault();
      if (!principal.classList.contains('selected')) {
        navigation.switchClassSelected(principal);
        
        container.updateContainer();
      }
    })

    task.addEventListener('click', (event) => {
      event.preventDefault();
      if (!task.classList.contains('selected')) {
        navigation.switchClassSelected(task)
        container.updateContainer()
        
      }
    });

    project.addEventListener('click', (event) => {
      event.preventDefault();
      if (!project.classList.contains('selected')) {
        navigation.switchClassSelected(project);
        container.updateContainer()
      }
    })
  }

  return { initEventListeners };
})();

events.initEventListeners();