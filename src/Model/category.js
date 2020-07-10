module.exports = (sequelize, Sequelize) => {
	const Category = sequelize.define('category', {
		Name: {
			type: Sequelize.STRING,
		},
	});

	return Category;
};
