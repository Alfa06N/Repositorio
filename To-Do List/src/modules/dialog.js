import exitIcon from '../icons/close.svg';
import moment from 'moment';
import storage from './storage';
import { Task, Project } from './constructors.js';
import container from './container';

const dialog = (() => {

  const priorities = {
    High: 'High',
    Mid: 'Mid',
    Low: 'Low'
  }
  
  const requestData = (dialogName) => {
    console.log('Requesting data for a new', dialogName);

    const myDialog = document.createElement('div');
    myDialog.classList.add('dialog');
    myDialog.classList.add('request');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const title = document.createElement('h1');
    title.classList.add('class');
    title.textContent = dialogName;

    const exit = document.createElement('img');
    exit.classList.add('close');
    exit.src = exitIcon;

    // Anexamos el título Task/Project al dialog y el botón exit
    myDialog.appendChild(title);
    myDialog.appendChild(exit);

    // Agregamos las inputs correspondientes
    const inputs = createInputs(dialogName);

    myDialog.appendChild(inputs.inputTitle);
    myDialog.appendChild(inputs.inputDescription);
    myDialog.appendChild(inputs.inputDate);
    myDialog.appendChild(inputs.menuPriority);

    // Posibilidad de tener notas
    if (dialogName === 'Project') {
      myDialog.appendChild(inputs.inputNotes);
    }

    // Crear botón para confirmar
    const confirm = document.createElement('button');
    confirm.classList.add('button');
    confirm.classList.add('confirm');
    confirm.textContent = 'Submit';

    myDialog.appendChild(confirm);
    showDialog(myDialog, overlay);
    dialogEvents();
  }

  const showDialog = (dialog, overlay) => {
    document.querySelector('body').appendChild(dialog);
    document.querySelector('body').appendChild(overlay);
  }

  const closeDialog = (dialog, overlay) => {
    dialog.classList.add('hidden');
    overlay.classList.add('hidden');

    setTimeout(() => {
      dialog.remove();
      overlay.remove();
    }, 150);
    
  }

  const validateDialogData = () => {
    const dialog = document.querySelector('.dialog');

    let title = dialog.querySelector('.title').value;
    let description = dialog.querySelector('.description').value;
    let date = dialog.querySelector('.dueDate').value;
    let priority = dialog.querySelector('.selected').textContent;

    // Validar si los datos no están vacíos
    if (title.trim() === '' || description.trim() === '' || date.trim() === '' || priority.trim() === '') {
      alert('Please, fill in all fields');
      return false;
    }

    if (!isNaN(title) || !isNaN(description)) {
      alert('The text field can\' contain only numbers');
      return false;
    }

    return true;
  }

  const createInputs = (dialogName) => {
    let inputTitle = document.createElement('input');
    inputTitle.classList.add('title');
    inputTitle.setAttribute('placeholder', `${dialogName} title`);

    let inputDescription = document.createElement('input');
    inputDescription.classList.add('description');
    inputDescription.setAttribute('placeholder', `${dialogName} description`);

    let inputDate = document.createElement('input');
    inputDate.classList.add('dueDate');
    let currentDate = moment().format('YYYY-MM-DD');
    inputDate.setAttribute('type', 'datetime-local');
    inputDate.setAttribute('min', currentDate);

    let menuPriority = document.createElement('div');
    menuPriority.classList.add('menuPriority');

    Object.keys(priorities).forEach(key => {
      const button = document.createElement('button');
      button.classList.add('button');
      button.classList.add(key);

      if (priorities[key] === 'Mid') {
        button.classList.add('selected');
      }

      button.textContent = priorities[key];
      menuPriority.appendChild(button);
    })

    const inputNotes = document.createElement('textarea');
    inputNotes.classList.add('notes');

    return {
      inputTitle,
      inputDescription,
      inputDate,
      menuPriority,
      inputNotes
    }
  }

  const editData = (element) => {
    const myDialog = document.createElement('div');
    myDialog.classList.add('dialog');
    myDialog.classList.add('request');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const title = document.createElement('h1');
    title.classList.add('class');
    title.classList.add('edit');
    title.textContent = element.class;

    const exit = document.createElement('img');
    exit.classList.add('close');
    exit.src = exitIcon;

    // Anexamos el título Task/Project al dialog y el botón exit
    myDialog.appendChild(title);
    myDialog.appendChild(exit);

    // Agregamos las inputs correspondientes
    const inputs = createInputs(element.class);

    const titleName = inputs.inputTitle;
    titleName.value = element.title;
    myDialog.appendChild(titleName);

    const description = inputs.inputDescription;
    description.value = element.description;
    myDialog.appendChild(description);

    const date = inputs.inputDate;
    date.value = element.dueDate;
    myDialog.appendChild(date);

    myDialog.appendChild(inputs.menuPriority);

    // Posibilidad de tener notas
    if (element.class === 'Project') {
      const notes = inputs.inputNotes;
      notes.value = element.notes;
      myDialog.appendChild(notes);
    }

    // Crear botón para confirmar
    const confirm = document.createElement('button');
    confirm.classList.add('button');
    confirm.classList.add('confirm');
    confirm.textContent = 'Submit';

    myDialog.appendChild(confirm);

    showDialog(myDialog, overlay);

    dialogEvents();

    confirm.addEventListener('click', (event) => {
      event.preventDefault();

      const classTitle = myDialog.querySelector('.class');
      if (dialog.validateDialogData()) {
        storage.removeItem(element.title);
        let newObj;

        if (classTitle.textContent === 'Project') {
          newObj = Project.createProject();
        } else {
          newObj = Task.createTask();
        }

        // Eliminamos el elemento viejo
        storage.removeItem(element.title);

        // Agregamos el nuevo
        storage.saveData(newObj);
        dialog.closeDialog(myDialog, overlay);
        container.updateContainer();
      }
      
    })
  }

  const dialogEvents = () => {
    const myDialog = document.querySelector('.dialog');
    const overlay = document.querySelector('.overlay');

    const classTitle = myDialog.querySelector('.class');
    if (!classTitle.classList.contains('edit')) {
      myDialog.querySelector('.confirm').addEventListener('click', (event) => {
        event.preventDefault();

        if (dialog.validateDialogData()) {
          console.log('Los datos son válidos');
          let newObj;

          if (classTitle.textContent === 'Project') {
            newObj = Project.createProject();
          } else {
            newObj = Task.createTask();
          }

          // Si ya hay un elemento con el mismo título, lo eliminamos
          if (storage.getItem(newObj.title) !== null) {
            storage.removeItem(newObj.title);
          }

          // Agregamos el nuevo
          storage.saveData(newObj);
          dialog.closeDialog(myDialog, overlay);
          container.updateContainer();
        }
      })
    }

    myDialog.querySelector('.close').addEventListener('click', (event) => {
      dialog.closeDialog(myDialog, overlay);
    })

    let high = myDialog.querySelector('.High');
    let mid = myDialog.querySelector('.Mid');
    let low = myDialog.querySelector('.Low');

    const switchPrioritySelected = (newSelected) => {
      let actualSelected = myDialog.querySelector('.selected');
      actualSelected.classList.remove('selected');
      newSelected.classList.add('selected');
    }

    high.addEventListener('click', (event) => {
      if (!high.classList.contains('selected')) {
        switchPrioritySelected(high);
      }
    })

    mid.addEventListener('click', (event) => {
      if (!mid.classList.contains('selected')) {
        switchPrioritySelected(mid);
      }
    });

    low.addEventListener('click', (event) => {
      if (!low.classList.contains('selected')) {
        switchPrioritySelected(low);
      }
    });
  }

  return {
    requestData,
    closeDialog,
    validateDialogData,
    editData
  }
})();


export default dialog;