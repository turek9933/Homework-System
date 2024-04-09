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
    tasks.push(task);
    saveTasks(tasks);
}

function deleteTask(id) {
    const tasks = loadTasks();
    return tasks.filter(task => task.id !== id);
}

function getTask(id) {
    const tasks = loadTasks();
    return tasks.find(task => task.id === id);
}

function updateTask(id, title, description, finishDate, done) {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === id);
    task.title = title;
    task.description = description;
    task.finishDate = finishDate;
    task.done = done;
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
};