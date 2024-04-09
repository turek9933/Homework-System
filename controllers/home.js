
const getHomePage = (req, res) => {
    res.render('Home', {pageTitle: 'Home Page'});
}

module.exports = {
    getHomePage,
}