const { Sequelize } = require('sequelize');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB_NAME } = process.env;

const sequelize = new Sequelize(
	MYSQL_DB_NAME,
	MYSQL_USER,
	MYSQL_PASSWORD,
	{
		host: MYSQL_HOST,
		dialect: 'mysql',
		define: {
			timestamps: false
		}
	});

module.exports = { sequelize };