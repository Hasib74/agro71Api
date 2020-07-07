module.exports = (sequelize, Sequelize) => {
	const product = sequelize.define('product', {
		admin_id: {
			type: Sequelize.INTEGER,
		},
		Name: {
			type: Sequelize.STRING,
		},
		UnitPrice: {
			type: Sequelize.FLOAT,
		},
		Unit: {
			type: Sequelize.INTEGER,
		},
		Stock: {
			type: Sequelize.INTEGER,
		},
		Category_id: {
			type: Sequelize.INTEGER,
		},
		Image: {
			type: Sequelize.STRING,
		},
		Description: {
			type: Sequelize.STRING,
		},

		Status: {
			type: Sequelize.STRING,
		},

		Rating: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
	});

	return product;
};
