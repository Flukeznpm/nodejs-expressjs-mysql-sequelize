const { Sequelize } = require('sequelize');
const { sequelize } = require("../utils/sequelize");

const wallet = sequelize.define('wallet',
	{
		walletId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			unique: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		totalAmount: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
	},
	{
		timestamps: false,
	},
	{
		tableName: 'wallet'
	}
)

module.exports = wallet;