const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var moneyRequestController = require('../Controller/moneyRequest.js');

app.post('/', auth, moneyRequestController.create);
app.get('/', auth, moneyRequestController.findAll);
app.get('/:id', auth, moneyRequestController.findOne);
app.put('/:id', auth, moneyRequestController.update);
app.delete('/:id', auth, moneyRequestController.delete);

module.exports = app;
