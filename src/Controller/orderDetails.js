const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const orderDetails = db.orderDetails;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		CurrentUnitPrice: req.body.CurrentUnitPrice,
		Quantity: req.body.Quantity,
		orderId: req.body.orderId,
		productId: req.body.productId,
	};

	if (
		req.body.CurrentUnitPrice == null ||
		req.body.Quantity == null ||
		req.body.orderId == null ||
		req.body.productId == null
	) {
		res.send({
			status: false,
			message: 'Feild Requred',
		});
	}

	orderDetails.create(data).then((data) => {
		if (data != null) {
			res.send(data);
		} else {
			res.send({
				status: false,
				message: 'Failed to create',
			});
		}
	});
};

exports.findAll = (req, res) => {
	orderDetails.findAll().then((data) => {
		if (data[0] != null) {
			res.send(data);
		} else {
			res.send({ status: false, message: 'Order is empty' });
		}
	});
};

exports.findOne = (req, res) => {
	orderDetails.findAll({ where: { id: req.params.id } }).then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({
				status: false,
				message: 'Data not found',
			});
		}
	});
};

exports.update = (req, res) => {
	var data = {
		CurrentUnitPrice: req.body.CurrentUnitPrice,
		Quantity: req.body.Quantity,
		orderId: req.body.orderId,
		productId: req.body.productId,
	};

	orderDetails
		.update(data, { where: { id: req.params.id } })
		.then((result) => {
			if (result == 1) {
				res.send({ status: true, message: 'Update successfully' });
			} else {
				res.send({
					status: false,
					message: 'Failed to update',
				});
			}
		});
};

exports.delete = (req, res) => {
	orderDetails.destroy({ where: { id: req.params.id } }).then((result) => {
		if (result == 1) {
			res.json(200, {
				message: 'Deleted  successfully',
				//	data: req.body,
			});
		} else {
			res.send({ status: false, message: 'Delete Filed' });
		}
	});
};
