const express = require('express');
var app = express();

const auth = require('../Middleware/auth.js');

const productController = require('../Controller/Product/product.js');

app.post('/', auth, productController.create);
app.get('/', auth, productController.findAll);
app.get('/:id', auth, productController.findOne);

app.use(auth, (req, res, next) => {
	if (req.user.type == 'super admin') {
		next();
	} else {
		res.send({
			status: false,
			message: 'Only super admin allow',
		});
	}
});

app.put('/:id', auth, productController.update);
app.delete('/:id', auth, productController.delete);

module.exports = app;
