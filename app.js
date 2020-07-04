const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

var userController = require('./src/Controller/User/user.js');

app.use('/user', userController);

app.listen('3000', () => {
	console.log('Server started on port 3000');
});
