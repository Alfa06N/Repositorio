import { Task, Project } from "./modules/constructors";
import NavigationManager from "./modules/navigation";
import HeadManager from "./modules/head";
import ContainerManager from "./modules/container";
import { Storage } from "./modules/storage";
import Items from "./modules/ItemsCreate";
import DataManager from "./modules/storage";
import FormManager, { FormLogic } from "./modules/formCreate";
import './styles.css';
import { getInputs, getCurrentItem } from "./modules/globalFunctions";

class GlobalEvents {
  static initEventListeners() {
    GlobalEvents.contentLoad()
    GlobalEvents.navigateMenu()
    GlobalEvents.createMenu()
    GlobalEvents.removeAll()
  }

  static contentLoad() {
    document.addEventListener('DOMContentLoaded', (event) => {
      ContainerManager.fillContainer()
    })
  }

  static navigateMenu() {
    const navigation = document.querySelector('nav');
    const navigationButtons = navigation.querySelectorAll('.button');

    navigationButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        if (!button.classList.contains('selected')) {

          NavigationManager.switchSelected(button);
          ContainerManager.fillContainer()
          // AddEvents.eventsItem();
        }
      })
    });
  }

  static createMenu() {
    const createContainer = document.querySelector('.menuCreate')
    const options = createContainer.querySelectorAll('.option');

    options.forEach(option => {
      option.addEventListener('click', () => {
        if (option.classList.contains('task')) {
          FormManager.displayRequestData('Task')
        } else {
          FormManager.displayRequestData('Project')
        }
      })
    })
  }

  static removeAll() {
    const removeAll = document.querySelector('.removeAll')

    removeAll.addEventListener('click', () => {
      DataManager.clearData()
      ContainerManager.fillContainer();
    })
  }
}

class AddEvents {
  static eventsForm() {
    const confirm = document.querySelector('.confirm');

    confirm.addEventListener('submitForm', () => {
      if (FormLogic.validateFormData()) {
        // Obtenemos los datos de las entradas con getInputs()
        const item = getInputs()
        console.log(item);

        const form = document.querySelector('.dialog');
        let newObj;
        // Verificamos si el formulario es para tareas o proyectos:
        if (form.classList.contains('Task')) {
          newObj = Task.createTask(item.title.value, item.description.value, item.date.value, item.priority.textContent);
        } else {
          newObj = Project.createProject(item.title.value, item.description.value, item.date.value, item.priority.textContent, item.notes.value);
        }

        console.log(newObj);
        if (!form.classList.contains('edit')) {
          DataManager.addItem(newObj);
          FormManager.closeRequest();
          ContainerManager.fillContainer(); 
        } else {
          console.log(getCurrentItem())
          // DataManager.modifyItem(newObj, currentItem);
          
        } 
      }
    })
  }
}

GlobalEvents.initEventListeners();