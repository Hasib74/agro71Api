const express = require('express');
var app = express();

const adminController = require('../Controller/Admin/admin.js');

app.post('/', adminController.create);

module.exports = app;
