var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var apiRoutes = require('./api-routes');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true });
var db = mongoose.connection;
if (!db) {
    console.log('error connecting to db');
} else {
    console.log('success connecting to db');
}

app.use('/', apiRoutes);

var port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening to port ' + port));
