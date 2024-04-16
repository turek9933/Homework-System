const taskManager = require('../models/tasksManager');

let successMessage = '';

const getTaskList = (req, res) => {
    const tasks = taskManager.loadTasks();
    res.render('Task-list', {pageTitle: 'Tasks List', tasks: tasks});
}
const getSuccess = (req, res) => {
    res.render('Success', {pageTitle: 'Success', successMessage: successMessage});
}

const getAddTask = (req, res) => {
    res.render('Add-task', {pageTitle: 'Add Task'});
}
const postAddTask = (req, res) => {
    const {title, description, finishDate, done} = req.body;
    const fixedDone = done === 'true' ? true : false;
    taskManager.addTask(title, description, finishDate, fixedDone);
    res.redirect('/success-add');
}
const getSuccessAdd = (req, res) => {
    successMessage = 'Task added successfully';
    getSuccess(req, res);
}

const getEditTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    const task = taskManager.getTask(fixedId);
    res.render('Edit-task', {pageTitle: 'Edit Task', task: task});
}
const postEditTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    const {title, description, finishDate, done} = req.body;
    const fixedDone = done === 'true' ? true : false;
    taskManager.updateTask(fixedId, title, description, finishDate, fixedDone);
    res.redirect('/success-edit');
}
const getSuccessEdit = (req, res) => {
    successMessage = 'Task edited successfully';
    getSuccess(req, res);
}

const postDeleteTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    taskManager.deleteTask(fixedId);
    res.redirect('/success-delete');
}
const getSuccessDelete = (req, res) => {
    successMessage = 'Task deleted successfully';
    getSuccess(req, res);
}

const getDeleteAllTasks = (req, res) => {
    taskManager.deleteAllTasks();
    res.redirect('/success-all-delete');
}
const getSuccessAllDelete = (req, res) => {
    successMessage = 'All tasks deleted successfully';
    getSuccess(req, res);
}

const postMarkTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    taskManager.markTaskOppositeStatus(fixedId);
    res.redirect('/tasks-list');
}

module.exports = {
    getTaskList,

    getAddTask,
    postAddTask,
    getSuccessAdd,

    getEditTask,
    postEditTask,
    getSuccessEdit,

    postDeleteTask,
    getSuccessDelete,

    getDeleteAllTasks,
    getSuccessAllDelete,

    postMarkTask,
}