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
    return Book.find({}, function(err, books) {
        if (err) {
            console.log('err');
        } else {
            res.send(books);
            console.log('retrieved list of books, ' + books[0].title);
        }
    });
};
