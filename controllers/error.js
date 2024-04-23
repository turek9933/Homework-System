
const getErrorPage = (req, res) => {
    res.status(404).render('Error', {pageTitle: 'Not found'});
}

module.exports = {
    getErrorPage,
}