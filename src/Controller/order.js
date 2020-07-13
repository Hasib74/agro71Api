const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const order = db.order;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		TotalSellingAmount: req.body.TotalSellingAmount,
		Paid: req.body.Paid,
		Due: req.body.Due,
		CustomerName: req.body.CustomerName,
		CustomerContact: req.body.CustomerContact,
		status: req.body.status,
		adminId: req.body.adminId,
		productId: req.body.productId,
	};

	if (
		req.body.TotalSellingAmount == null ||
		req.body.Paid == null ||
		req.body.Due == null ||
		req.body.CustomerName == null ||
		req.body.CustomerContact == null ||
		req.body.status == null
	) {
		res.send({
			status: false,
			message: 'Feild Requred',
		});
	}

	order.create(data).then((data) => {
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
	order.findAll().then((data) => {
		if (data[0] != null) {
			res.send(data);
		} else {
			res.send({ status: false, message: 'Order is empty' });
		}
	});
};

exports.findOne = (req, res) => {
	order.findAll({ where: { id: req.params.id } }).then((result) => {
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
		TotalSellingAmount: req.body.TotalSellingAmount,
		Paid: req.body.Paid,
		Due: req.body.Due,
		CustomerName: req.body.CustomerName,
		CustomerContact: req.body.CustomerContact,
		status: req.body.status,
	};

	order.update(data, { where: { id: req.params.id } }).then((result) => {
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
	order.destroy({ where: { id: req.params.id } }).then((result) => {
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
