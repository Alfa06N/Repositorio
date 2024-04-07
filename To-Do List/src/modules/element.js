import storage from "./storage.js";
import exitIcon from "../icons/close.svg"
import moment from "moment";

const element = (() => {
  // Mostrar elementos:
  const getElement = (element) => {
    let title = element.querySelector('.title').textContent;
    title = title.substring(title.indexOf(' ') + 1);
    
    element = storage.getItem(title);
    return element;
  }

  const createElement = (element) => {
    const card = document.createElement('div')
    card.classList.add('card');

    const classElement = document.createElement('h2');
    classElement.classList.add('class');
    classElement.textContent = element.class;

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = element.title;

    const info = document.createElement('div');
    info.classList.add('info');

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = `<span class="date">Description:  </span>${element.description}`;

    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    let date = element.dueDate;
    dueDate.innerHTML = `<span class="date">Date:  </span>${moment(date).format('DD/MM/YYYY HH:mm') }`;

    const priority = document.createElement('p');
    priority.classList.add('priority');
    priority.innerHTML = `<span>Priority: </span><span class="${element.priority}">${element.priority}</span>`;

    const state = document.createElement('p');
    state.classList.add('finish');
    if (element.finish === false) {
      state.textContent = 'Unfinished';
    } else {
      state.textContent = 'Finished';
    }

    info.appendChild(description);
    info.appendChild(dueDate);
    info.appendChild(priority);
    info.appendChild(state);

    card.appendChild(classElement);
    card.appendChild(title);
    card.appendChild(info);

    if (element.class === 'Project') {
      const notes = document.createElement('p');
      notes.classList.add('notes');
      notes.textContent = element.notes;
      card.appendChild(notes);
    }

    // Creando botón para cerrarlo.
    const exit = document.createElement('img');
    exit.classList.add('exit');
    exit.src = exitIcon;

    exit.addEventListener('click', (event) => {
      closeElement(card);
    })

    card.appendChild(exit);

    // Muestra el elemento en pantalla:
    showElement(card);
  }

  const showElement = (element) => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    document.querySelector('body').appendChild(overlay);
    document.querySelector('body').appendChild(element);

  }

  const closeElement = (element) => {
    const overlay = document.querySelector('.overlay');
    element.classList.add('hidden');
    overlay.classList.add('hidden');
    
    setTimeout(() => {
      document.querySelector('body').removeChild(overlay);
      document.querySelector('body').removeChild(element);
    }, 150);

  }

  return {
    getElement,
    createElement,
    showElement
  }
})();

export default element;