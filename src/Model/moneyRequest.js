module.exports = (sequelize, Sequelize) => {
	var Invest = sequelize.define('moneyRequest', {
		Amount: {
			type: Sequelize.STRING,
		},
		Details: {
			type: Sequelize.STRING,
		},

		Status: {
			type: Sequelize.STRING,
		},
		Comments: {
			type: Sequelize.STRING,
		},
	});

	return Invest;
};
