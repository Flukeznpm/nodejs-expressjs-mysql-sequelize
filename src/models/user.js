const { Sequelize } = require('sequelize');
const { sequelize } = require("../utils/sequelize");

const user = sequelize.define('user',
	{
		userId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			unique: true,
			primaryKey: true
		},
		firstname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
	},
	{
		timestamps: false,
	},
	{
		tableName: 'user'
	}
)

module.exports = user;