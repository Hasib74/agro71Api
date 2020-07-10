const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./src/Model/index.js');
db.sequelize.sync();

var userRoute = require('./src/Route/admin.js');
var productRoute = require('./src/Route/product.js');
var categoryRoute = require('./src/Route/category');
var investRoute = require('./src/Route/invest');

app.use('/api/admin', userRoute);
app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/invest', investRoute);

app.listen('3000', () => {
	console.log('Server started on port 3000');
});
