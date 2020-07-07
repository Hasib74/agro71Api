const express = require('express');
var app = express();

const productController = require('../Controller/Product/product.js');

app.post('/', productController.create);
app.get('/', productController.findAll);
app.get('/:id', productController.findOne);
app.put('/:id', productController.update);
app.delete('/:id', productController.delete);

module.exports = app;
