const express = require('express');
var app = express();

const auth = require('../Middleware/auth.js');

const taskController = require('../Controller/task.js');

app.post('/', auth, taskController.create);
app.get('/', auth, taskController.findAll);
app.get('/search/:id', auth, taskController.search);
app.get('/search', auth, taskController.search);
app.put('/:id', auth, taskController.update);
app.delete('/:id', auth, taskController.delete);

module.exports = app;
