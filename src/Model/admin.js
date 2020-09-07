module.exports = (sequelize, Sequelize) => {
	const Admin = sequelize.define('admin', {
		// Id: {
		// 	//type: Sequelize.INTEGER,

		// 	autoIncrement: true,
		// },
		Name: {
			type: Sequelize.STRING,
		},
		Email: {
			type: Sequelize.STRING,
		},
		Phone: {
			type: Sequelize.STRING,
		},
		JoiningDate: {
			type: Sequelize.STRING,
		},
		Picture: {
			type: Sequelize.STRING,
		},
		Nid: {
			type: Sequelize.STRING,
		},
		Address: {
			type: Sequelize.STRING,
		},
		Password: {
			type: Sequelize.STRING,
		},
		FamilyContact: {
			type: Sequelize.STRING,
		},

		type: {
			type: Sequelize.STRING,
		},
	});

	return Admin;
};
