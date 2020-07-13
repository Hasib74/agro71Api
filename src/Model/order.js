module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define('order', {
		// Id: {
		// 	//type: Sequelize.INTEGER,

		// 	autoIncrement: true,
		// },
		TotalSellingAmount: {
			type: Sequelize.STRING,
		},
		Paid: {
			type: Sequelize.STRING,
		},
		Due: {
			type: Sequelize.STRING,
		},
		CustomerName: {
			type: Sequelize.STRING,
		},
		CustomerContact: {
			type: Sequelize.STRING,
		},
		status: {
			type: Sequelize.STRING,
		},
	});

	return Order;
};
