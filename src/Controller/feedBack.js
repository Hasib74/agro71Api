const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const feedBack = db.feedBack;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		Subject: req.body.Subject,
		Details: req.body.Details,
		TableName: req.body.TableName,
		RowId: req.body.RowId,
		adminId: req.body.adminId,
	};

	feedBack
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
	feedBack.findAll().then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'Category not found' });
		}
	});
};

exports.findOne = (req, res) => {
	feedBack.findAll({ where: { id: req.params.id } }).then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'category not found' });
		}
	});
};

exports.update = (req, res) => {
	feedBack
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
	feedBack.destroy({ where: { id: req.params.id } }).then((result) => {
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
