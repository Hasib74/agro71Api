const db = require('../Model/index.js');
const { Sequelize } = require('../Model/index.js');

const employee = db.employee;
const Op = Sequelize.Op;

exports.create = (req, res) => {
	var data = {
		Name: req.body.Name,
		Phone: req.body.Phone,
		Nid: req.body.Nid,
		FatherOrSpouse: req.body.FatherOrSpouse,
		FamilyContact: req.body.FamilyContact,

		Salary: req.body.Salary,
		Status: req.body.Status,
		designationId: req.body.designationId,
		adminId: req.body.adminId,
	};

	employee
		.findAll({
			where: {
				Phone: req.body.Phone,
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
					employee.create(data).then((result) => {
						if (result) {
							res.send(result);
						}
					});
				}
			}
		});
};

exports.findAll = (req, res) => {
	employee.findAll().then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'Category not found' });
		}
	});
};

exports.findOne = (req, res) => {
	employee.findAll({ where: { id: req.params.id } }).then((result) => {
		if (result[0] != null) {
			res.send(result);
		} else {
			res.send({ status: false, message: 'category not found' });
		}
	});
};

exports.update = (req, res) => {
	employee
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
	employee.destroy({ where: { id: req.params.id } }).then((result) => {
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
