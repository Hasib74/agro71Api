const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const expense = db.expense;
const Op = Sequelize.Op;
exports.create = (req, res) => {
	var data = {
		Amount: req.body.Amount,
		Details: req.body.Details,
		Location: req.body.Location,
		Invoice: req.body.Invoice,
		Status: req.body.Status,
		Due: req.body.Due,
		DueDate: req.body.DueDate,
		adminId: req.body.adminId,
	};

	expense
		.create(data)
		.then((result) => {
			if (result != null) {
				res.send(result);
			} else {
				res.send({
					status: false,
					message: 'Can not create',
				});
			}
		})
		.catch((err) => {
			res.send({
				status: false,
				error: err,
			});
		});
};

exports.findAll = (req, res) => {
	expense.findAll().then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'Category not found' });
		}
	});
};

exports.findOne = (req, res) => {
	expense.findAll({ where: { id: req.params.id } }).then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'category not found' });
		}
	});
};

exports.update = (req, res) => {
	expense
		.update(req.body, { where: { id: req.params.id } })
		.then((result) => {
			if (result == 1) {
				res.json(200, {
					message: 'Update successfully',
					data: req.body,
				});
			} else {
				res.send({ status: false, message: 'Update Filed' });
			}
		});
};

exports.delete = (req, res) => {
	expense.destroy({ where: { id: req.params.id } }).then((result) => {
		if (result == 1) {
			res.json(200, {
				message: 'Deleted  successfully',
				//	data: req.body,
			});
		} else {
			res.send({ status: false, message: 'Update Filed' });
		}
	});
};
