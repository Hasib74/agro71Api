const dbConfig = require('../Database/config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require('../Model/admin.js')(sequelize, Sequelize);
db.product = require('../Model/product.js')(sequelize, Sequelize);
db.category = require('../Model/category.js')(sequelize, Sequelize);
db.invest = require('../Model/invest.js')(sequelize, Sequelize);

db.admin.hasMany(db.product);

db.category.hasMany(db.product);

db.admin.hasMany(db.invest);

module.exports = db;
