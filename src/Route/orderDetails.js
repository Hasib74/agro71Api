const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var orderDetailsController = require('../Controller/orderDetails.js');

app.post('/', auth, orderDetailsController.create);
app.get('/', auth, orderDetailsController.findAll);
app.get('/:id', auth, orderDetailsController.findOne);
app.put('/:id', auth, orderDetailsController.update);
app.delete('/:id', auth, orderDetailsController.delete);

module.exports = app;
