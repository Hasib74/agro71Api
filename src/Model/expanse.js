module.exports = (sequelize, Sequelize) => {
	const Expense = sequelize.define('expense', {
		// Id: {
		// 	//type: Sequelize.INTEGER,

		// 	autoIncrement: true,
		// },
		Amount: {
			type: Sequelize.STRING,
		},
		Details: {
			type: Sequelize.STRING,
		},
		Location: {
			type: Sequelize.STRING,
		},
		Invoice: {
			type: Sequelize.STRING,
		},
		Invoice: {
			type: Sequelize.STRING,
		},

		Due: {
			type: Sequelize.STRING,
		},
		DueDate: {
			type: Sequelize.STRING,
		},
	});

	return Expense;
};
