const dbConfig = require('../Database/config.js');
const Sequelize = require('sequelize');
const { DB } = require('../Database/config.js');
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
db.problem = require('../Model/problem.js')(sequelize, Sequelize);
db.employee = require('../Model/employee.js')(sequelize, Sequelize);
db.designation = require('../Model/designation.js')(sequelize, Sequelize);

db.admin.hasMany(db.product);
db.product.belongsTo(db.admin);

db.category.hasMany(db.product);
db.product.belongsTo(db.category);

db.admin.hasMany(db.invest);
db.invest.belongsTo(db.admin);

db.admin.hasMany(db.problem);
db.problem.belongsTo(db.admin);

db.admin.hasMany(db.employee);
db.employee.belongsTo(db.admin);

db.designation.hasMany(db.employee);
db.employee.belongsTo(db.designation);

module.exports = db;
