const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var problemController = require('../Controller/problem.js');

app.post('/', auth, problemController.create);
app.get('/', auth, problemController.findAll);
app.get('/:id', auth, problemController.findOne);
app.put('/:id', auth, problemController.update);
app.delete('/:id', auth, problemController.delete);

module.exports = app;
