const db = require('../../Model/index.js');
const Admin = db.admin;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Validate request
	if (!req.body.Name) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a Tutorial
	const data = {
		Name: req.body.Name,
		Email: req.body.Email,
		Phone: req.body.Phone,
		Picture: req.body.Picture,
		Nid: req.body.Nid,
		JoiningDate: req.body.JoiningDate,
		Address: req.body.Address,
		Password: req.body.Password,
		FamilyContact: req.body.FamilyContact,
		type: req.body.type,
	};

	// Save Tutorial in the database

	//Admin.save(data);

	//Admin.create(data);

	//console.log(Admin);
	//console.log(data);

	//	Admin.findOne(1);

	Admin.create(data)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while creating the Tutorial.',
			});
		});
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
