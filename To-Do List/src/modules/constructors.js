export { Task, Project };

class Task {
  constructor(title, description, date, priority) {
    this.class = 'Task';
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.finish = false;
  }

  getClass() {
    return this.class;
  }

  getFinish() {
    return this.finish;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDate() {
    return this.date;
  }

  getPriority() {
    return this.priority;
  }

  static createTask(title, description, date, priority) {
    const newObj = new Task(title, description, date, priority);

    return newObj;
  }
}

class Project extends Task {
  constructor(title, description, date, priority, notes) {
    super(title, description, date, priority);
    this.class = 'Project';
    this.notes = notes;
    this.finish = false;
  }

  getClass() {
    return this.class;
  }

  getFinish() {
    return this.finish;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDate() {
    return this.date;
  }

  getPriority() {
    return this.priority;
  }

  getNotes() {
    return this.notes;
  }

  static createProject(title, description, dueDate, priority, notes) {

    const newObj = new Project(title, description, dueDate, priority, notes);

    return newObj;
  }
}