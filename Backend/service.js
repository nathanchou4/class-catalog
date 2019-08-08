var Book = require('./Models/bookModel')
var mongoose = require('mongoose');

exports.addBook = function(req, res) {
    var query = req.body;
    var book = new Book({
        title: query.title,
        firstName: query.firstName,
        lastName: query.lastName,
        category: query.category
    });

    book.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send(book.title + ' was saved successfully to the catalog');
        }
    })
};

exports.getBooks = function(req, res) {
    var options = {
        page: req.query.page,
        limit: req.query.limit
    };
    Book.paginate({}, options, function(err, books) {
        if (err) {
            console.log("Pagination is erroring");
        } else {
            res.send(books.docs);
        }
    });
};
