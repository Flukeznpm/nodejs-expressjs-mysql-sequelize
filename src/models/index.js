const { Sequelize } = require('sequelize');
const { sequelize } = require("../utils/sequelize");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.admin = require("./admin");
db.user = require("./user");
db.wallet = require("./wallet");
db.currency = require("./currency");
db.currencyBase = require("./currencyBase");
//---------------------------------------------------------------//
db.user.hasMany(
	db.wallet,
	{
		foreignKey: { name: 'userId', field: 'userId' }
	}
);
db.wallet.belongsTo(db.user, { foreignKey: 'userId' });
//---------------------------------------------------------------//
db.wallet.hasMany(
	db.currency,
	{
		foreignKey: { name: 'walletId', field: 'walletId' }
	}
);
db.currency.belongsTo(db.wallet, { foreignKey: 'walletId' });
db.currency.belongsTo(db.user, { foreignKey: 'userId' });
//---------------------------------------------------------------//

// db.sequelize.sync();
module.exports = db;