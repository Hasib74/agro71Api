const db = require('../../Model/index.js');
const product = db.product;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	if (!req.body.Name) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	var data = {
		admin_id: req.body.admin_id,
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
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
	product.findAll().then((data) => {
		if (data != null) {
			res.send(data);
		} else {
			res.status(404).send({
				message: 'Data not found',
			});
		}
	});
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
