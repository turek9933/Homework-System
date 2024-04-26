const express = require('express');
const tasksController = require('../controllers/tasks');

const router = express.Router();

router.get('/tasks-list', tasksController.getTaskList);

router.get('/add-task', tasksController.getAddTask);
router.post('/add-task', tasksController.postAddTask);
router.get('/success-add', tasksController.getSuccessAdd);

router.get('/edit-task/:id', tasksController.getEditTask);
router.post('/edit-task/:id', tasksController.postEditTask);
router.get('/success-edit', tasksController.getSuccessEdit);

router.post('/delete-task/:id', tasksController.postDeleteTask);
router.get('/success-delete', tasksController.getSuccessDelete);

router.post('/delete-all', tasksController.getDeleteAllTasks);
router.get('/success-all-delete', tasksController.getSuccessAllDelete);

router.post('/mark/:id', tasksController.postMarkTask);

module.exports = router;