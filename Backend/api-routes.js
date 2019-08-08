var router = require('express').Router();
var service = require('./service');

router.get('/', function(req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to Nathan\'s RESTful Library Catalog for the Sophomore Class library!'
    });
});

router.get('/catalog', function(req, res) {
    service.getBooks(req, res);
});

router.post('/addBook', function(req, res) {
    service.addBook(req, res);
});

module.exports = router;
