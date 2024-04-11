class Storage {
  static getData() {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    return data;
  }

  static sendData(newData) {
    localStorage.setItem('data', JSON.stringify(newData));
  }
}

class DataManager {
  static getItem(itemName) {
    const data = Storage.getData();
    const item = data.find(obj => obj.title === itemName);
    return item;
  }

  static removeItem(itemName) {
    const data = Storage.getData();
    const newData = data.filter(item => item.title !== itemName);
    Storage.sendData(newData);
  }

  static modifyItem(newItem, oldItem) {
    const data = Storage.getData();
    const oldItemName = oldItem.title;
    const index = data.findIndex(item => item.title === oldItemName);

    if (index !== -1) {
      data[index] = newItem;
      Storage.sendData(data);
    } else {
      console.log(`The item '${oldItemName}' has not been found in storage`);
    }
  }

  static addItem(newItem) {
    const data = Storage.getData();
    data.push(newItem);
    Storage.sendData(data);
  }

  static clearData() {
    localStorage.removeItem('data');
  }

  static getPrincipal() {
    return Storage.getData();
  }

  static filterByClass(selected) {
    const data = Storage.getData();

    if (selected.classList.contains('principal')) {
      return data
    } else if (selected.classList.contains('task')) {
      return data.filter(item => item.class === 'Task');
    } else {
      return data.filter(item => item.class === 'Project');
    }
  }
}

export default DataManager;
export { Storage };