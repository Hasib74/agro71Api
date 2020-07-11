module.exports = (sequelize, Sequelize) => {
	const Designation = sequelize.define('designation', {
		Name: {
			type: Sequelize.STRING,
		},
	});

	return Designation;
};
