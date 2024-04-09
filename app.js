const {Task} = require('./models/task');
const taskManager = require('./models/tasksManager');
const homeController = require('./controllers/home');
const tasksController = require('./controllers/tasks');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', homeController.getHomePage);

app.get('/tasks-list', tasksController.getTaskList);

app.get('/add-task', tasksController.getAddTask);

app.post('/add-task', tasksController.postAddTask);

app.get('/success-add', tasksController.getSuccessAdd);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});