const { Sequelize } = require('sequelize');
const { sequelize } = require("../utils/sequelize");

const currencyBase = sequelize.define('currencyBase',
	{
		currencyBaseId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			unique: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		exchangeRate: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
	},
	{
		timestamps: false,
	},
	{
		tableName: 'currencyBase'
	}
)

module.exports = currencyBase;