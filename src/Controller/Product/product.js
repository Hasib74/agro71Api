const db = require('../../Model/index.js');
const { Sequelize } = require('../../Model/index.js');
const product = db.product;
const Op = Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	if (!req.body.Name) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	var data = {
		adminId: req.user.id,
		Name: req.body.Name,
		UnitPrice: req.body.UnitPrice,
		Unit: req.body.Unit,
		Stock: req.body.Stock,
		Category_id: req.body.Category_id,
		Image: req.body.Image,
		Description: req.body.Description,
		Status: req.body.Status,
		Rating: req.body.Rating,
	};

	product.findAll({ where: { Name: req.body.Name } }).then((result) => {
		if (result[0] == null) {
			product
				.create(data)
				.then((data) => {
					res.send(data);
				})
				.catch((err) => {
					res.status(500).send({
						message:
							err.message ||
							'Some error occurred while creating the Product.',
					});
				});
		} else {
			res.send({
				status: false,
				message: 'Product Already added',
			});
		}
	});
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
	console.log(req.body);
	if (!checkBody(req)) {
		//console.log(r);
		product.findAll().then((data) => {
			if (data != null) {
				res.send(data);
			} else {
				res.status(404).send({
					message: 'Data not found',
				});
			}
		});
	} else {
		console.log('Body find');
		// var search = {
		// 	Name: req.body.Name == null ? '' : req.body.Name
		// 	UnitPrice: req.body.UnitPrice == null ? '' : req.body.UnitPrice,
		// 	Unit: req.body.Unit == null ? '' : req.body.Unit,
		// 	Category_id:
		// 		req.body.Category_id == null ? '' : req.body.Category_id,
		// 	Status: req.body.Status == null ? '' : req.body.Status,
		// 	Rating: req.body.Rating == null ? '' : req.body.Rating,
		// 	adminId: req.body.AdminId == null ? '' : req.body.AdminId,
		// };

		product
			.findAll({
				where: Sequelize.or(
					{ Name: req.body.Name == null ? '' : req.body.Name },
					{
						UnitPrice:
							req.body.UnitPrice == null
								? -1
								: req.body.UnitPrice,
					},
					{
						Unit: req.body.Unit == null ? -1 : req.body.Unit,
					},
					// {
					// 	Category_id:
					// 		req.body.Category_id == null
					// 			? -1
					// 			: req.body.Category_id,
					// },
					{
						Status: req.body.Status == null ? -1 : req.body.Status,
					},
					{
						Rating: req.body.Rating == null ? -1 : req.body.Rating,
					},
					{
						adminId:
							req.body.AdminId == null ? -1 : req.body.AdminId,
					}
				),
			})
			.then((result) => {
				if (result == null) {
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
	}
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
	product.findByPk(req.params.id).then((data) => {
		if (data != null) {
			res.send(data);
		} else {
			res.status(404).send({
				message: 'Data not found',
			});
		}
	});
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
	product.update(req.body, { where: { id: req.params.id } }).then((data) => {
		console.log(data);

		if (data == 1) {
			res.json(200, {
				message: 'Update successfully',
				data: req.body,
			});
		} else {
			res.status(404).send({
				message: 'Failed to update',
			});
		}

		//	res.send(data);
	});
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
	product.destroy({ where: { id: req.params.id } }).then((data) => {
		console.log(data);

		if (data == 1) {
			res.json(
				res.json({
					message: 'Deleted Successfully',
				})
			);
		} else {
			res.json(
				res.status(404).json({
					message: 'Failed to delete',
				})
			);
		}
	});
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};

function checkBody(req) {
	var status;

	if (
		req.body.Name != null ||
		req.body.UnitPrice != null ||
		req.body.Unit != null ||
		req.body.Status != null ||
		req.body.Rating != null ||
		req.body.AdminId != null
	) {
		//r = true;

		status = true;
	} else {
		status = false;

		//r = false;
	}

	return status;
}
