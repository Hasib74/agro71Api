module.exports = (sequelize, Sequelize) => {
	const FeedBack = sequelize.define('feedback', {
		// Id: {
		// 	//type: Sequelize.INTEGER,

		// 	autoIncrement: true,
		// },
		Subject: {
			type: Sequelize.STRING,
		},
		Details: {
			type: Sequelize.STRING,
		},
		TableName: {
			type: Sequelize.STRING,
		},
		RowId: {
			type: Sequelize.INTEGER,
		},
	});

	return FeedBack;
};
