const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var expanseController = require('../Controller/expanse.js');

app.post('/', auth, expanseController.create);
app.get('/', auth, expanseController.findAll);
app.get('/:id', auth, expanseController.findOne);
app.put('/:id', auth, expanseController.update);
app.delete('/:id', auth, expanseController.delete);

module.exports = app;
