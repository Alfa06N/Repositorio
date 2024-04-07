import storage from "./storage.js";
import editIcon from "../icons/edit.svg";
import removeIcon from "../icons/delete.svg";
import visibilityIcon from "../icons/visibility.svg";
import element from "./element.js";
import dialog from "./dialog.js";
import moment from 'moment';

const container = (() => {
  const createContainer = () => {
    const container = document.createElement('section');
    container.classList.add('containerList');
    return container;
  }

  const clearContainer = () => {
    document.querySelector('.containerList').classList.add('hidden');

    setTimeout(() => {
      document.querySelector('.containerList').remove();
    }, 150);
  }

  const showPrincipal = () => {
    // Contenedor de los items
    const container = createContainer();

    let data = storage.getData();

    fillContainer(container, data);
    optionsEvents();
  }

  const fillContainer = (container, data) => {
    if (data.length === 0) {
      const h1 = document.createElement('h1');
      h1.textContent = 'There\'s nothing to show.';
      h1.classList.add('nothing');
      container.appendChild(h1);
    }
    for (const item of data) {
      // Contenedor del item
      const element = document.createElement('article');
      element.classList.add('element');

      // Información del item
      const information = document.createElement('div');
      information.classList.add('information');

      // Título del item
      const title = document.createElement('h1');
      title.classList.add('title');
      if (item.finish === true) {
        title.classList.add('finish');
      }
      title.textContent = `${item.class}: ${item.title}`;

      // Detalles del item
      const description = document.createElement('p');
      description.classList.add('description');
      description.innerHTML = `<span class="dueDate">${moment(item.dueDate).format('HH:mm')}</span><span class="${item.priority}">${item.priority} Priority</span> ${item.description}`
      
      information.appendChild(title);
      information.appendChild(description);

      const options = getOptionsList();

      element.appendChild(information);
      element.appendChild(options);

      container.appendChild(element);
    }

    document.querySelector('.content').appendChild(container);
  }

  const showTasks = () => {
    const container = createContainer();

    const data = storage.filterTasks();

    fillContainer(container, data);
    optionsEvents();
  }

  const showProjects = () => {
    const container = createContainer();

    const data = storage.filterProjects();

    fillContainer(container, data);
    optionsEvents();
  }

  const getOptionsList = () => {
    const options = document.createElement('div');
    options.classList.add('options');

    const edit = document.createElement('img');
    edit.classList.add('edit');
    edit.src = editIcon;

    const remove = document.createElement('img');
    remove.classList.add('remove');
    remove.src = removeIcon;

    const visibility = document.createElement('img');
    visibility.classList.add('visibility');
    visibility.src = visibilityIcon;

    options.appendChild(edit);
    options.appendChild(visibility);
    options.appendChild(remove);

    return options;
  }

    // Eventos de los elementos:
  const optionsEvents = () => {
    const visibility = document.querySelectorAll('.visibility');

    visibility.forEach(button => {
      button.addEventListener('click', (event) => {
        
        const obj = element.getElement(button.parentNode.parentNode);
        element.createElement(obj);
      })
    });

    const edit = document.querySelectorAll('.edit');

    edit.forEach(button => {
      button.addEventListener('click', (event) => {
        let item = element.getElement(button.parentNode.parentNode);

        dialog.editData(item);

      })
    });

    const remove = document.querySelectorAll('.remove');

    remove.forEach(button => {
      button.addEventListener('click', (event) => {
        
        // Nombre del elemento:
        let item = element.getElement(button.parentNode.parentNode);
        
        storage.removeItem(item.title);

        setTimeout(updateContainer(), 200);
      })
    });
    
    const items = document.querySelectorAll('.title');

    items.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        let obj = element.getElement(item.parentNode.parentNode);
        item.classList.toggle('finish');

        if (obj.finish === false) {
          obj.finish = true;
        } else {
          obj.finish = false;
        }
        storage.modifyItem(obj);
      })
    })
  }

  const updateContainer = () => {
    const nav = document.querySelector('.nav');
    const selected = nav.querySelector('.selected');

    clearContainer();
    setTimeout(() => {
      if (selected.classList.contains('principal')) {
        showPrincipal();
      } else if (selected.classList.contains('task')) {
        showTasks();
      } else {
        showProjects();
      }
    }, 200);
    
  }

  return { showPrincipal, clearContainer, showTasks, showProjects, updateContainer };
})();

export default container;