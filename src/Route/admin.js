const express = require('express');
var app = express();

const adminController = require('../Controller/Admin/admin.js');

app.post('/', adminController.create);
app.get('/', adminController.findAll);
app.get('/:id', adminController.findOne);
app.put('/:id', adminController.update);
app.delete('/:id', adminController.delete);

module.exports = app;
