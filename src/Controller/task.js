const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const task = db.task;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		Task: req.body.Task,
		TimeLimit: req.body.TimeLimit,
		Status: req.body.Status,
		adminId: req.body.adminId,
	};

	if (
		req.body.Task == null ||
		req.body.TimeLimit == null ||
		req.body.Status == null ||
		req.body.adminId == null
	) {
		res.send({
			status: false,
			message: 'Feild Requred',
		});
	}

	task.create(data).then((data) => {
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
	task.findAll().then((data) => {
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

exports.search = (req, res) => {
	if (req.params.id == null) {
		task.findAll({
			where: Sequelize.or(
				{
					TimeLimit:
						req.body.TimeLimit == null ? '' : req.body.TimeLimit,
				},
				{
					Status: req.body.Status == null ? '' : req.body.Status,
				},
				{
					adminId: req.body.adminId == null ? -1 : req.body.adminId,
				},
				{
					Task: req.body.Task == null ? '' : req.body.Task,
				},
				{
					createdAt:
						req.body.createdAt == null ? '' : req.body.createdAt,
				}
				// {
				// 	Category_id:
				// 		req.body.Category_id == null
				// 			? -1
				// 			: req.body.Category_id,
				// },
			),
		}).then((result) => {
			console.log(result);
			if (!result) {
				res.send({
					status: false,
					message: 'Data not found',
				});
			} else {
				res.send({
					status: true,
					message: result,
				});
			}
		});
	} else {
		task.findAll({ where: { id: req.params.id } }).then((data) => {
			if (data[0] != null) {
				res.send(data);
			} else {
				res.send({
					status: false,
					message: 'Data not found',
				});
			}
		});
	}
};

exports.update = (req, res) => {
	task.update(req.body, { where: { id: req.params.id } }).then((data) => {
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
	task.destroy({ where: { id: req.params.id } }).then((data) => {
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
