const fs = require('fs');
const path = require('path');

//const filePath = path.join(__dirname, 'tasks.json');

class Task {
  constructor(id, title, description = '', finishDate = null, done = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.finishDate = finishDate;
    this.done = done;
  }
  updateTitle(newTitle) {
    this.title = newTitle;
  }
  updateDescription(newDescription) {
    this.description = newDescription;
  }
  updateFinishDate(newFinishDate) {
    this.finishDate = newFinishDate;
  }
  updateStatus(newDone) {
    this.done = newDone;
  }
  markAsDone() {
    this.done = true;
  }
  markAsUndone() {
    this.done = false;
  }
  updateTask(newTitle, newDescription, newFinishDate, newDone) {
    this.updateTitle(newTitle);
    this.updateDescription(newDescription);
    this.updateFinishDate(newFinishDate);
    this.updateStatus(newDone);
  }
  // Zwraca największe zajęte ID Task-a,
  // lub wartość -1, jeśli nie ma żadnego Task-a
  static maxTaskId(tasks) {
    let tempMaxId = -1;
    for (let el of tasks) {
        if (el.id > tempMaxId) {
            tempMaxId = el.id;
        }
    }
    return tempMaxId;
  }
  // Zapisuje do pliku TABLICE task-ów
  static saveTasks(tasks, filePath = path.join(__dirname, 'tasks.json')) {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
  }
  static loadTasks(filePath = path.join(__dirname, 'tasks.json')) {
    try {
      const data = fs.readFileSync(filePath);
      const tasks = JSON.parse(data);
      let result = tasks.map(task => new Task(task.id, task.title, task.description, task.finishDate, task.done));
      return result;
    }
    catch (error) {
      console.log(error);
      return [];
      }
    }
  static addTask(title, description, finishDate, done, id = -1, filePath = path.join(__dirname, 'tasks.json')) {
    if (id === -1) {
        id = getFreeId(filePath);
    }
    const taskToAdd = new Task(id, title, description, finishDate, done);
    const tasks = Task.loadTasks(filePath);
    tasks.push(taskToAdd);
    Task.saveTasks(tasks, filePath);
  }
  static deleteTask(id, filePath = path.join(__dirname, 'tasks.json')) {
    const tasks = Task.loadTasks(filePath);
    const fixedTasks = tasks.filter(task => task.id !== id);
    Task.saveTasks(fixedTasks, filePath);
  }
  static getTask(id, filePath = path.join(__dirname, 'tasks.json')) {
    const tasks = Task.loadTasks(filePath);
    return tasks.find(task => task.id === id);
  }
  static updateTask(id, newTitle, newDescription, newFinishDate, newDone, filePath = path.join(__dirname, 'tasks.json')) {
    let tasks = Task.loadTasks(filePath);
    tasks.find(task => task.id === id).updateTask(newTitle, newDescription, newFinishDate, newDone);
    Task.saveTasks(tasks, filePath);
  }

  static deleteAllTasks(filePath = path.join(__dirname, 'tasks.json')) {
    Task.saveTasks([], filePath);
  }
  static markTaskAsDone(id, filePath = path.join(__dirname, 'tasks.json')) {
    let tasks = Task.loadTasks(filePath);
    let taskToUpdate = Task.getTask(id, filePath);
    taskToUpdate.markAsDone();
    Task.saveTasks(tasks, filePath);
  }
  static markTaskAsUndone(id, filePath = path.join(__dirname, 'tasks.json')) {
    let tasks = Task.loadTasks(filePath);
    let taskToUpdate = Task.getTask(id, filePath);
    taskToUpdate.markAsUndone();
    Task.saveTasks(tasks, filePath);
  }
  static markTaskOppositeStatus(id, filePath = path.join(__dirname, 'tasks.json')) {
    let tasks = Task.loadTasks(filePath);
    tasks.forEach(task => {
        if (task.id === id) {
            if (task.done) {
                task.markAsUndone();
            }
            else {
                task.markAsDone();
            }
        }
    });
    Task.saveTasks(tasks, filePath);
  }
}

// Zwraca pierwszy wolny identyfikator dla Task-a
function getFreeId(filePath = path.join(__dirname, 'tasks.json')) {
  const tasks = Task.loadTasks(filePath);
  const maxId = Task.maxTaskId(tasks);
  let resultId = 0;
  if (maxId !== -1) {
      // Szukamy w while-u, pierwszego id, które jest wolne, którego nie ma w tablicy
      // (tasks.find() zwraca wtedy undefined)
      while (resultId < maxId) {
          if (tasks.find(task => task.id === resultId) === undefined) {
              break;
          }
          resultId += 1;
      }
      // Jeśli wszystkie id do maxId są użyte, rezultatem będzie maxId + 1
      resultId = resultId === maxId ? maxId + 1 : resultId;
  }
  return resultId;
}

module.exports = Task