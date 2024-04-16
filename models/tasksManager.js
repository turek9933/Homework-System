const fs = require('fs');
const {Task} = require('./task');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

// Zwraca największe zajęte ID Task-a,
// lub wartość -1, jeśli nie ma żadnego Task-a
const maxTaskId = (tasks) => {
    let tempMaxId = -1;
    for (let el of tasks) {
        if (el.id > tempMaxId) {
            tempMaxId = el.id;
        }
    }
    return tempMaxId;
}

// Zapisuje do pliku TABLICE task-ów
function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

function loadTasks() {
    try {
        const data = fs.readFileSync(filePath);
        const tasks = JSON.parse(data);
        result = tasks.map(task => new Task(task.id, task.title, task.description, task.finishDate, task.done));
        return result;
    }
    catch (error) {
        return [];
    }
}

function addTask(title, description, finishDate, done, id = getFreeId()) {
    const taskToAdd = new Task(id, title, description, finishDate, done);
    const tasks = loadTasks();
    tasks.push(taskToAdd);
    saveTasks(tasks);
}

function deleteTask(id) {
    const tasks = loadTasks();
    tasks.forEach(task => { console.log(task.id, task.id !== id); });
    const fixedTasks = tasks.filter(task => task.id !== id);
    console.log(fixedTasks);
    saveTasks(fixedTasks);
}

function getTask(id) {
    const tasks = loadTasks();
    return tasks.find(task => task.id === id);
}

function updateTask(id, newTitle, newDescription, newFinishDate, newDone) {
    let tasks = loadTasks();
    console.log(tasks);
    tasks.find(task => task.id === id).updateTask(newTitle, newDescription, newFinishDate, newDone);
    console.log(tasks);
    saveTasks(tasks);
}

function deleteAllTasks() {
    saveTasks([]);
}

function markTaskAsDone(id) {
    let tasks = loadTasks();
    let taskToUpdate = getTask(id);
    taskToUpdate.markAsDone();
    saveTasks(tasks);
}

function markTaskAsUndone(id) {
    let tasks = loadTasks();
    let taskToUpdate = getTask(id);
    taskToUpdate.markAsUndone();
    saveTasks(tasks);
}

function markTaskOppositeStatus(id) {
    let tasks = loadTasks();
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
    saveTasks(tasks);
}


// Zwraca pierwszy wolny identyfikator dla Task-a
function getFreeId() {
    const tasks = loadTasks();
    const maxId = maxTaskId(tasks);
    let resultId = 0;
    if (maxId !== -1) {
        while (resultId < maxId) {
            if (
                tasks.find(task => task.id === resultId) === undefined
            ) {
                break;
            }
            resultId += 1;
        }
        resultId = resultId === maxId ? maxId + 1 : resultId;
    }
    return resultId;
}

module.exports = {
    saveTasks,
    loadTasks,
    addTask,
    deleteTask,
    getTask,
    updateTask,
    getFreeId,
    markTaskAsDone,
    markTaskAsUndone,
    deleteAllTasks,
    markTaskOppositeStatus,
};