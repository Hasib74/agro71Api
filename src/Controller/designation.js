const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const designation = db.designation;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		Name: req.body.Name,
	};

	designation
		.findAll({
			where: {
				Name: req.body.Name,
			},
		})
		.then((result) => {
			if (result[0] != null) {
				res.send({
					status: false,
					message: 'Already added thios categoty',
				});
			} else {
				if (req.body.Name != null) {
					designation.create(data).then((result) => {
						if (result) {
							res.send(result);
						}
					});
				}
			}
		});
};

exports.findAll = (req, res) => {
	designation.findAll().then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'Category not found' });
		}
	});
};

exports.findOne = (req, res) => {
	designation.findAll({ where: { id: req.params.id } }).then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'category not found' });
		}
	});
};

exports.update = (req, res) => {
	designation
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
	designation.destroy({ where: { id: req.params.id } }).then((result) => {
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
