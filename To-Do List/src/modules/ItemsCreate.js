import editIcon from "../icons/edit.svg";
import removeIcon from "../icons/delete.svg";
import visibilityIcon from "../icons/visibility.svg";
import moment from 'moment';
import { getGrandpa, setCurrentItem, getCurrentItem, getInputs } from "./globalFunctions";
import DataManager from "./storage";
import ContainerManager from "./container";
import CardManager from "./card";
import FormManager, { FormLogic } from "./formCreate";

class Items {
  static getOptionsList() {
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

  static createItems(data) {
    const items = [];
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

      const options = Items.getOptionsList();

      element.appendChild(information);
      element.appendChild(options);

      items.push(element);
    }
    return items;
  }

  static optionEvents() {
    const edit = document.querySelectorAll('.edit')

    const remove = document.querySelectorAll('.remove')

    const visibility = document.querySelectorAll('.visibility')

    edit.forEach(editButton => {
      editButton.addEventListener('click', (event) => {
        
        const element = getGrandpa(event.target);

        let item = Items.getItem(element);

        const form = FormManager.displayRequestData(item.class);
        form.classList.add('edit');
        // Decimos que este es el objeto actual a modificar
        setCurrentItem(item);
        let inputs = getInputs();
        // Agregamos los datos el item original a las entradas del formulario
        inputs.title.value = item.title
        inputs.description.value = item.description
        inputs.date.value = item.date

        let newSelected = document.querySelector(`.button.${item.priority}`);
        console.log(newSelected);
        FormLogic.switchSelected(newSelected);

        const newEvent = new Event('editItem');
        window.dispatchEvent(newEvent);
      })
    });

    remove.forEach(removeButton => {
      removeButton.addEventListener('click', (event) => {
        const element = getGrandpa(event.target);
        
        let item = Items.getItem(element);
        console.log(item);

        DataManager.removeItem(item.title);
        ContainerManager.fillContainer();
      })
    });

    visibility.forEach(visibilityButton => {
      visibilityButton.addEventListener('click', (event) => {
        const element = getGrandpa(event.target);
        console.log(element);

        let item = Items.getItem(element);

        CardManager.displayCard(item)
      })
    });
  }

  static getItem(item) {
    let title = item.querySelector('.title').textContent;
    title = title.substring(title.indexOf(' ') + 1);

    item = DataManager.getItem(title);

    return item;
  }
}

export default Items;