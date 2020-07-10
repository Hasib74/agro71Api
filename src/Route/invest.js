const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var investController = require('../Controller/invest.js');

app.post('/', auth, investController.create);
app.get('/', auth, investController.findAll);
app.get('/:id', auth, investController.findOne);
app.put('/:id', auth, investController.update);
app.delete('/:id', auth, investController.delete);

module.exports = app;
