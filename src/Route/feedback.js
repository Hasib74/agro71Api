const express = require('express');
var app = express();

var auth = require('../Middleware/auth.js');

var feedbackController = require('../Controller/feedBack.js');

app.post('/', auth, feedbackController.create);
app.get('/', auth, feedbackController.findAll);
app.get('/:id', auth, feedbackController.findOne);
app.put('/:id', auth, feedbackController.update);
app.delete('/:id', auth, feedbackController.delete);

module.exports = app;
