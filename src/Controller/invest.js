const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const invest = db.invest;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		Amount: req.body.Amount,
		Details: req.body.Details,
		Category: req.body.Category,
		Status: req.body.Status,
		adminId: req.body.adminId,
	};

	invest.create(data).then((result) => {
		if (result != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'Failed to save' });
		}
	});
};

exports.findAll = (req, res) => {
	invest.findAll().then((result) => {
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

exports.findOne = (req, res) => {
	invest.findAll({ where: { id: req.params.id } }).then((result) => {
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
		Amount: req.body.Amount,
		Details: req.body.Details,
		Category: req.body.Category,
		Status: req.body.Status,
		adminId: req.body.adminId,
	};

	invest.update(data, { where: { id: req.params.id } }).then((result) => {
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
	invest.destroy({ where: { id: req.params.id } }).then((result) => {
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
