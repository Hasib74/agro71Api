const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var orderController = require('../Controller/order.js');

app.post('/', auth, orderController.create);
app.get('/', auth, orderController.findAll);
app.get('/:id', auth, orderController.findOne);
app.put('/:id', auth, orderController.update);
app.delete('/:id', auth, orderController.delete);

module.exports = app;
