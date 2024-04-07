import dialog from './dialog.js'

const create = (() => {
  const createOptions = {
    optionTask: document.querySelector('.option.task'),
    optionProject: document.querySelector('.option.project')
  }

  const createEvents = () => {
    createOptions.optionTask.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.requestData('Task');
    });

    createOptions.optionProject.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.requestData('Project');
    })
  }

  return {
    createEvents,
  }
})();

export default create;