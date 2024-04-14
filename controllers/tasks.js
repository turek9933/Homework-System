const express = require('express');
const taskManager = require('../models/tasksManager');

const router = express.Router();

let successMessage = '';

const getTaskList = (req, res) => {
    const tasks = taskManager.loadTasks();
    console.log(tasks);
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
    console.log(req.body);
    console.log(title, description, finishDate, fixedDone);
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
    console.log(fixedId);
    console.log(typeof fixedId);
    console.log(task);
    res.render('Edit-task', {pageTitle: 'Edit Task', task: task});
}
const postEditTask = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    const {title, description, finishDate, done} = req.body;
    const fixedDone = done === 'true' ? true : false;
    console.log(req.body);
    console.log(fixedId, title, description, finishDate, fixedDone);
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
    console.log(fixedId);
    console.log(typeof fixedId);
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
}