var mongoose = require('mongoose');
var validator = require('validator');

var bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    category: {
        type:String,
        required: false,
    },
    borrower: {
        type: String,
        required: false
    },
    borrowerEmail: {
        type: String,
        required: false,
        lowercase: true,
        trim: true,
        validate: (value) => {
            return validator.isEmail(value);
        }
    },
    checkOutDate: {
        type: Date,
    },
    returnDate: {
        type: Date
    },
    numCheckouts: {
        type: Number,
        default: 1
    }
});

bookSchema.index({lastName: 1, firstName: 1});

var Book = module.exports = mongoose.model('Book', bookSchema);
