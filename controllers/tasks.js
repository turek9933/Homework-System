const express = require('express');
const taskManager = require('../models/tasksManager');

const router = express.Router();

const getTaskList = (req, res) => {
    const tasks = taskManager.loadTasks();
    res.render('Task-list', {pageTitle: 'Tasks List', tasks: tasks});
}
const getAddTask = (req, res) => {
    res.render('Add-task', {pageTitle: 'Add Task'});
}
const postAddTask = (req, res) => {
    const {title, description, finishDate, done} = req.body;
    taskManager.addTask(title, description, finishDate, done);
    res.redirect('/success-add');
}
const getSuccessAdd = (req, res) => {
    console.log(req.body);
    res.render('Success', {pageTitle: 'Success', successMessage: 'Task added successfully'});
}

module.exports = {
    getTaskList,
    getAddTask,
    postAddTask,
    getSuccessAdd,
}