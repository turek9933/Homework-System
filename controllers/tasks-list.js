
const getTaskList = (req, res) => {
    res.render('Task-list', {pageTitle: 'Tasks List'});
}

module.exports = {
    getTaskList,
}