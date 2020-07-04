const express = require('express');
var app = express();
app.get('/', (req, res) => {
	res.json(200, {
		sucess: true,
		message: 'Get Request',
	});
});

app.post('/', (req, res) => {
	res.json(200, {
		sucess: true,
		message: 'Post Request',
	});
});

module.exports = app;

/// app.get()
