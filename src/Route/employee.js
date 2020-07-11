const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var employeeController = require('../Controller/employee.js');

app.post('/', auth, employeeController.create);
app.get('/', auth, employeeController.findAll);
app.get('/:id', auth, employeeController.findOne);
app.put('/:id', auth, employeeController.update);
app.delete('/:id', auth, employeeController.delete);

module.exports = app;
