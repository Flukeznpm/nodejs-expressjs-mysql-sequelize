const { Sequelize } = require('sequelize');
const { sequelize } = require("../utils/sequelize");

const currency = sequelize.define('currency',
	{
		currencyId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			unique: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		amount: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		currencyBaseId: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		walletId: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
	},
	{
		timestamps: false,
	},
	{
		tableName: 'currency'
	}
)

module.exports = currency;