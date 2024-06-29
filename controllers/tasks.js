const Task = require('../models/task');

const getTaskList = (req, res) => {
    const tasks = Task.loadTasks();
    res.render('Task-list', {pageTitle: 'Tasks List', tasks: tasks});
}

const getAddTask = (req, res) => {
    res.render('Add-task', {pageTitle: 'Add Task'});
}
const postAddTask = (req, res) => {
    const {title, description, finishDate, done} = req.body;
    const fixedDone = done === 'true' ? true : false;
    Task.addTask(title, description, finishDate, fixedDone);
    res.redirect('/success-add');
}
const getSuccessAdd = (req, res) => {
    res.render('Success', {pageTitle: 'Success', successMessage: 'Task added successfully'});
}

const getEditTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    const task = Task.getTask(fixedId);
    res.render('Edit-task', {pageTitle: 'Edit Task', task: task});
}
const postEditTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    const {title, description, finishDate, done} = req.body;
    const fixedDone = done === 'true' ? true : false;
    Task.updateTask(fixedId, title, description, finishDate, fixedDone);
    res.redirect('/success-edit');
}
const getSuccessEdit = (req, res) => {
    res.render('Success', {pageTitle: 'Success', successMessage: 'Task edited successfully'});
}

const postDeleteTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    Task.deleteTask(fixedId);
    res.redirect('/success-delete');
}
const getSuccessDelete = (req, res) => {
    res.render('Success', {pageTitle: 'Success', successMessage: 'Task deleted successfully'});
}

const getDeleteAllTasks = (req, res) => {
    Task.deleteAllTasks();
    res.redirect('/success-all-delete');
}
const getSuccessAllDelete = (req, res) => {
    res.render('Success', {pageTitle: 'Success', successMessage: 'All tasks deleted successfully'});
}

const postMarkTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    Task.markTaskOppositeStatus(fixedId);
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