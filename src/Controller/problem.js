const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const problem = db.problem;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		Subject: req.body.Subject,
		Description: req.body.Description,
		Image: req.body.Image,
		Status: req.body.Status,
		adminId: req.body.adminId,
	};

	if (
		req.body.Subject == null ||
		req.body.Description == null ||
		req.body.Image == null ||
		req.body.Status == null ||
		req.body.adminId == null
	) {
		res.send({
			status: false,
			message: 'Feild Requred',
		});
	}

	problem.create(data).then((data) => {
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
	problem.findAll().then((data) => {
		if (data != null) {
			res.send(data);
		} else {
			res.send({
				status: false,
				message: 'Not Found',
			});
		}
	});
};

exports.findOne = (req, res) => {
	problem.findAll({ where: { id: req.params.id } }).then((data) => {
		if (data != null) {
			res.send(data);
		} else {
			res.send({
				status: false,
				message: 'Not Found',
			});
		}
	});
};

exports.update = (req, res) => {
	problem.update(req.body, { where: { id: req.params.id } }).then((data) => {
		if (data == 1) {
			res.send({
				status: true,
				message: 'Updated Successfully',
			});
		} else {
			res.send({
				status: false,
				message: 'Not Found',
			});
		}
	});
};

exports.delete = (req, res) => {
	problem.destroy({ where: { id: req.params.id } }).then((data) => {
		if (data == 1) {
			res.send({
				status: true,
				message: 'Deleted Successfully',
			});
		} else {
			res.send({
				status: false,
				message: 'Not Found',
			});
		}
	});
};
