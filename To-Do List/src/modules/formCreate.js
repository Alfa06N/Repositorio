import Interface from './interfaceCreate';
import { switchClassSelected } from './globalFunctions';
import { getInputs } from './globalFunctions';
import { Task, Project } from './constructors';
import DataManager from './storage';
import ContainerManager from './container';
import { getCurrentItem } from './globalFunctions';

class FormContent {

  static getPriorities() {
    return {
      High: 'High',
      Mid: 'Mid',
      Low: 'Low'
    }
  }

  

  static createTitle(className) {
    const title = document.createElement('h1');
    title.classList.add('class');
    title.textContent = className;

    return title;
  }

  static createInputs() {
    let inputTitle = document.createElement('input');
    inputTitle.classList.add('title');
    inputTitle.setAttribute('placeholder', 'Item title');

    let inputDescription = document.createElement('input');
    inputDescription.classList.add('description');
    inputDescription.setAttribute('placeholder', 'Item description');
    
    let inputDate = document.createElement('input');
    inputDate.classList.add('dueDate');
    inputDate.setAttribute('type', 'datetime-local');

    const inputNotes = document.createElement('textarea');
    inputNotes.classList.add('notes')

    return {
      inputTitle,
      inputDescription,
      inputDate,
      inputNotes
    }
  }

  static createMenuPriority() {
    let menu = document.createElement('div');
    menu.classList.add('menuPriority');

    const priorities = FormContent.getPriorities();

    Object.keys(priorities).forEach(key => {
      const button = document.createElement('button')
      button.classList.add('button')
      button.classList.add(key)

      if (priorities[key] === 'Mid') {
        button.classList.add('selected');
      }

      button.textContent = priorities[key];
      menu.appendChild(button);
    })

    const menuButtons = menu.querySelectorAll('.button');

    menuButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        if (!button.classList.contains('selected')) {
          FormLogic.switchSelected( button);
        }
      })
    });
    return menu;
  }

  static createConfirmButton() {
    const confirm = document.createElement('button');
    confirm.classList.add('button')
    confirm.classList.add('confirm');
    confirm.textContent = 'Submit';

    const event = new Event('submitForm');
    confirm.addEventListener('click', () => {
      confirm.dispatchEvent(event);
    })
    return confirm;
  }
}

class FormManager {
  static displayRequestData(className) {
    
    const form = Interface.create();
    form.classList.add('request');
    form.classList.add(className);

    const title = FormContent.createTitle(className);

    // Anexamos el títutlo Task/Project al formulario y el botón exit
    form.appendChild(title);

    // Agregamos las inputs correspondientes
    const inputs = FormContent.createInputs();

    const menuPriority = FormContent.createMenuPriority();

      // Inputs
    form.appendChild(inputs.inputTitle)
    form.appendChild(inputs.inputDescription)
    form.appendChild(inputs.inputDate)

      // Selección de prioridad
    form.appendChild(menuPriority)

      // Posibilidad de agregar notas
    if (className === 'Project') {
      form.appendChild(inputs.inputNotes)
    }

    // Crear botón para confirmar
    const confirm = FormContent.createConfirmButton();
    form.appendChild(confirm)

    FormLogic.eventsForm(form);
    Interface.show(form);
    return form
  }

  static closeRequest() {
    Interface.delete();
  }
}

class FormLogic {
  static validateFormData() {
    const form = document.querySelector('.dialog')

    let title = form.querySelector('.title').value
    let description = form.querySelector('.description').value
    let date = form.querySelector('.dueDate').value
    let priority = form.querySelector('.selected').textContent

    // Validar si los datos no están vacíos

    if (title.trim() === '' || description.trim() === '' || date.trim() === '' || priority.trim() === '') {
      alert('Please, fill in all fields')
      return false
    }

    if (!isNaN(title) || !isNaN(description)) {
      alert('The text field can\' contain only numbers');
      return false
    }

    return true
  }

  static getSelected() {
    form = document.querySelector('.dialog')
    return form.querySelector('.selected');
  }

  static switchSelected(newSelected) {
    const menu = document.querySelector('.menuPriority');
    switchClassSelected(menu, newSelected);
  }

  static eventsForm(form) {

    const confirm = form.querySelector('.confirm');

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
          DataManager.modifyItem(newObj, getCurrentItem());
          FormManager.closeRequest();
          ContainerManager.fillContainer();

        }
      }
    })
  }
}


export { FormLogic };
export default FormManager;