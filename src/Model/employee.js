module.exports = (sequelize, Sequelize) => {
	const Employee = sequelize.define('employee', {
		// Id: {
		// 	//type: Sequelize.INTEGER,

		// 	autoIncrement: true,
		// },
		Name: {
			type: Sequelize.STRING,
		},
		Phone: {
			type: Sequelize.STRING,
		},
		Nid: {
			type: Sequelize.STRING,
		},
		FatherOrSpouse: {
			type: Sequelize.STRING,
		},
		FamilyContact: {
			type: Sequelize.STRING,
		},

		Salary: {
			type: Sequelize.STRING,
		},
		Status: {
			type: Sequelize.STRING,
		},
	});

	return Employee;
};
