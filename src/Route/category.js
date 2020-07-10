const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var categoryController = require('../Controller/category.js');

app.post('/', auth, categoryController.create);
app.get('/', auth, categoryController.findAll);
app.get('/:id', auth, categoryController.findOne);
app.put('/:id', auth, categoryController.update);
app.delete('/:id', auth, categoryController.delete);

module.exports = app;
