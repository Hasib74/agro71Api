module.exports = (sequelize, Sequelize) => {
	const Problem = sequelize.define('problem', {
		// Id: {
		// 	//type: Sequelize.INTEGER,

		// 	autoIncrement: true,
		// },
		Subject: {
			type: Sequelize.STRING,
		},
		Description: {
			type: Sequelize.STRING,
		},
		Image: {
			type: Sequelize.STRING,
		},
		Status: {
			type: Sequelize.STRING,
		},
	});

	return Problem;
};
