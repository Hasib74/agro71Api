const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./src/Model/index.js');
db.sequelize.sync();

var userController = require('./src/Route/admin.js');
var productController = require('./src/Route/product.js');

app.use('/api/admin', userController);
app.use('/api/product', productController);

app.listen('3000', () => {
	console.log('Server started on port 3000');
});
