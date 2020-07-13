module.exports = (sequelize, Sequelize) => {
	const Task = sequelize.define('task', {
		Task: {
			type: Sequelize.STRING,
		},
		TimeLimit: {
			type: Sequelize.STRING,
		},
		Status: {
			type: Sequelize.STRING,
		},
	});

	return Task;
};
