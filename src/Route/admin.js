const express = require('express');
var app = express();
const auth = require('../Middleware/auth.js');
const adminController = require('../Controller/Admin/admin.js');

app.post('/login', adminController.logIn);

app.post('/logout', adminController.logout);

app.use(auth, (req, res, next) => {
	console.log(req.user.type);

	if (req.user.type == 'super admin') {
		next();
	} else {
		res.send({ message: 'No access' });
	}
});

app.post('/', auth, adminController.create);
app.get('/', auth, adminController.findAll);
app.get('/:id', auth, adminController.findOne);
app.put('/:id', auth, adminController.update);
app.delete('/:id', auth, adminController.delete);

module.exports = app;
