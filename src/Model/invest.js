module.exports = (sequelize, Sequelize) => {
	var Invest = sequelize.define('invest', {
		Amount: {
			type: Sequelize.STRING,
		},
		Details: {
			type: Sequelize.STRING,
		},
		Category: {
			type: Sequelize.STRING,
		},
		Status: {
			type: Sequelize.STRING,
		},
	});

	return Invest;
};
