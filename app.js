var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var home_paheRouter = require('./cutomer-repo/routes/home_pahe');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const MongoClient = require('mongodb').MongoClient;
let db;
const mongourl = 'mongodb://localhost:27017/'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/home_pahe', home_paheRouter);



module.exports = app;
app.listen(3000);
