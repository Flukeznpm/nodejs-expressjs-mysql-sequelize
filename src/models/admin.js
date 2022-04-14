const { Sequelize } = require('sequelize');
const { sequelize } = require("../utils/sequelize");

const admin = sequelize.define('admin',
	{
		adminId: {
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
		permission: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		}
	},
	{
		timestamps: false,
	},
	{
		tableName: 'admin'
	}
)

module.exports = admin;