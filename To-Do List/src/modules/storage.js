const storage = (() => {

  const getData = () => {
      // Obtiene la data guardada y la retorna en formato de array con objetos
      const data = JSON.parse(localStorage.getItem('data')) || [];
      return data;
  }

  const saveData = (newData) => {
    try {
      // Guarda el nuevo objeto en formato de cadena en el json.
      const data = getData();
      data.push(newData);
      updateData(data);
      console.log('Datos agregados exitosamente al almacenamiento local.');
    } catch (error) {
      console.error('Ocurrió un error en el procesamiento de los datos');
    }
  }

  const getItem = (itemName) => {
    const data = getData();
    // Iteramos a través del array para obtener el objeto
    for (const item of data) {
      if (item.title === itemName) {
        return item;
      }
    }
    console.error('El objeto no existe');
    return null;
  }

  const removeItem = (itemName) => {
    let data = getData();
    data = data.filter(item => item.title !== itemName);
    updateData(data);
    console.log('Datos eliminados exitosamente');
  }

  const modifyItem = (newItem) => {
    // Obtener los datos
    let data = getData();

    // Obtener el título del nuevo
    const itemName = newItem.title;

    // Buscar el índice del elemento que quiero modificar
    const index = data.findIndex(item => item.title === itemName)

    // Si encuentro el índice, reemplazo el elemento:
    if (index !== -1) {
      data[index] = newItem;
    } else {
      console.log(`The item '${itemName}' has not been found in storage`);
      return
    }

    updateData(data);
  }

  const updateData = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
  }

  const clearData = () => {
    // Elimina la data guardada en el navegador
    localStorage.clear();
    console.log('Se ha eliminado los datos del almacenamiento');
  }

  const filterByClass = (className) => {
    const data = getData();
    return data.filter(item => item.class === className);
  }

  const filterTasks = () => {
    return filterByClass('Task');
  }

  const filterProjects = () => {
    return filterByClass('Project')
  }

  return { getData, saveData, clearData, getItem, removeItem, filterTasks, filterProjects, modifyItem };
})();

export default storage;