const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const moneyRequest = db.moneyRequest;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		Amount: req.body.Amount,
		Details: req.body.Details,
		Status: req.body.Status,
		Comment: req.body.Comment,
		adminId: req.body.adminId,
	};

	moneyRequest.create(data).then((result) => {
		if (result != null) {
			res.send(result);
		} else {
			res.send({
				status: false,
				message: 'Failed to save',
			});
		}
	});
};

exports.findAll = (req, res) => {
	moneyRequest.findAll().then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, mesaage: 'Data not found' });
		}
	});
};

exports.findOne = (req, res) => {
	moneyRequest.findAll({ where: { id: req.params.id } }).then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
		}

		res.send({
			status: false,
			message: 'Data not found',
		});
	});
};

exports.delete = (req, res) => {
	moneyRequest.destroy({ where: { id: req.params.id } }).then((result) => {
		if (result == 1) {
			res.send({ status: true, message: 'Deleted Successfully' });
		} else {
			res.send({ status: false, message: 'Failed to delete' });
		}
	});
};

exports.update = (req, res) => {
	var data = {
		Amount: req.body.Amount,
		Details: req.body.Details,
		Status: req.body.Status,
		Comment: req.body.Comment,
		adminId: req.body.adminId,
	};

	moneyRequest
		.update(data, { where: { id: req.params.id } })
		.then((result) => {
			if (result == 1) {
				res.send({ status: true, message: 'Update Successfully' });
			} else {
				res.send({ status: false, message: 'Failed to update' });
			}
		});
};
