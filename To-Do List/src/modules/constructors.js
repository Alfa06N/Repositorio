class Task {
  constructor(title, description, dueDate, priority) {
    this.class = 'Task';
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finish = false;
  }

  static createTask() {
    const dialog = document.querySelector('.dialog');

    let titleValue = dialog.querySelector('.title').value;
    let descriptionValue = dialog.querySelector('.description').value;
    let dateValue = dialog.querySelector('.dueDate').value;
    let priorityValue = dialog.querySelector('.selected').textContent;

    const newObj = new Task(titleValue, descriptionValue, dateValue, priorityValue);

    return newObj;
  }
}

class Project extends Task {
  constructor(title, description, dueDate, priority, notes) {
    super(title, description, dueDate, priority);
    this.class = 'Project';
    this.notes = notes;
    this.finish = false;
  }

  static createProject() {
    const dialog = document.querySelector('.dialog');

    let titleValue = dialog.querySelector('.title').value;
    let descriptionValue = dialog.querySelector('.description').value;
    let dateValue = dialog.querySelector('.dueDate').value;
    let priorityValue = dialog.querySelector('.selected').textContent;
    let notesValue = dialog.querySelector('.notes').value;

    const newObj = new Project(titleValue, descriptionValue, dateValue, priorityValue, notesValue);

    return newObj;
  }
}

export { Task, Project };