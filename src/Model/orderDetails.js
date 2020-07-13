module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define('orderDetails', {
		// Id: {
		// 	//type: Sequelize.INTEGER,

		// 	autoIncrement: true,
		// },
		CurrentUnitPrice: {
			type: Sequelize.STRING,
		},
		Quantity: {
			type: Sequelize.STRING,
		},
	});

	return Order;
};
