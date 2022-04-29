const db = require('../models/index.js');
const { currency } = db;

module.exports.createCurrencyInWallet = async (
	userId,
	walletId,
	name,
	amount
) => {
	try {
		const insert = {
			userId: userId,
			walletId: walletId,
			name: name,
			amount: amount
		}
		const createCurrencyInWallet = await currency.create(insert);

		return createCurrencyInWallet;
	} catch (err) {
		throw err;
	}
}