
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRouter = require('./routes/home');
const tasksRouter = require('./routes/tasks');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(homeRouter);

app.use(tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on adress:\nhttp://localhost:${PORT}`);
});