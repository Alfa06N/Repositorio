import Interface from "./interfaceCreate";
import moment from 'moment';

class CardContent {
  static getName(item) {
    const title = document.createElement('h1')
    title.classList.add('title');
    title.textContent = item.title

    return title
  }

  static getClassTitle(item) {
    const classElement = document.createElement('h2')
    classElement.classList.add('class');
    classElement.textContent = item.class;

    return classElement
  }

  static getDivInfo(item) {
    console.log(item)
    const info = document.createElement('div')
    info.classList.add('info')

    // Contenido del div info:
    const description = document.createElement('p')
    description.classList.add('description')
    description.innerHTML = `<span class="date">Description:  </span>${item.description}`

    const dueDate = document.createElement('p')
    dueDate.classList.add('dueDate')
    let date = item.date
    console.log(date);
    dueDate.innerHTML = `<span class="date">Date:  </span>${moment(date).format('DD/MM/YYYY HH:mm')}`

    const priority = document.createElement('p')
    priority.classList.add('priority')
    priority.innerHTML = `<span>Priority: </span><span class="${item.priority}">${item.priority}</span>`

    const state = document.createElement('p')
    state.classList.add('finish')
    if (item.finish === false) {
      state.textContent = 'Unfinished'
    } else {
      state.textContent = 'Finished'
    }

    info.appendChild(description)
    info.appendChild(dueDate);
    info.appendChild(priority);
    info.appendChild(state);

    return info
  }
}

class CardManager {
  static displayCard(item) {
    const card = Interface.create();
    card.classList.add('card')

    // Creamos el tipo Task/Project
    const classElement = CardContent.getClassTitle(item)

    // Creamos el título del elemento
    const title = CardContent.getName(item)

    // Div para la información
    const info = CardContent.getDivInfo(item)

    // Llenamos el contenedor card
    card.appendChild(classElement);
    card.appendChild(title);
    card.appendChild(info);

    // Si es project, le agregamos notas
    if (item.class === 'Project') {
      const notes = document.createElement('p')
      notes.classList.add('notes')
      notes.textContent = item.notes;
      card.appendChild(notes);
    }

    Interface.show(card)
  }
}

export default CardManager