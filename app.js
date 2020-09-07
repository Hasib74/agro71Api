const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./src/Model/index.js');
db.sequelize.sync();

app.use((req, res, next) => {
	// res.header('Access-Control-Allow-Origin', '*');
	// res.header(
	// 	'Access-Control-Allow-Headers,Origin,X-Requested-With,Content-Type',
	// 	'Accept'
	// );

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

	if (req.method === 'OPTIONS') {
		req.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET');
		return res.status(200).json({});
	}
	next();
});

var userRoute = require('./src/Route/admin.js');
var productRoute = require('./src/Route/product.js');
var categoryRoute = require('./src/Route/category');
var investRoute = require('./src/Route/invest');
var problemsRoute = require('./src/Route/problem.js');
var employeeRoute = require('./src/Route/employee.js');
var designationRoute = require('./src/Route/designation.js');
var taskRoute = require('./src/Route/task.js');
var orderRoute = require('./src/Route/order.js');
var orderDetails = require('./src/Route/orderDetails.js');
var moenyRequestRoute = require('./src/Route/moneyRequest');
var expanseRoute = require('./src/Route/expanse');
var feedbackRoute = require('./src/Route/feedback');

app.use('/api/admin', userRoute);
app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/invest', investRoute);
app.use('/api/problem', problemsRoute);
app.use('/api/employee', employeeRoute);
app.use('/api/designation', designationRoute);
app.use('/api/task', taskRoute);
app.use('/api/order', orderRoute);
app.use('/api/orderDetails', orderDetails);
app.use('/api/moneyRequest', moenyRequestRoute);
app.use('/api/expanse', expanseRoute);
app.use('/api/feedback', feedbackRoute);

app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 400;

	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});
app.listen('3001', () => {
	console.log('Server started on port 3000');
});
