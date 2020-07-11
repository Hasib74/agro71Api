const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var designationController = require('../Controller/designation.js');

app.post('/', auth, designationController.create);
app.get('/', auth, designationController.findAll);
app.get('/:id', auth, designationController.findOne);
app.put('/:id', auth, designationController.update);
app.delete('/:id', auth, designationController.delete);

module.exports = app;
