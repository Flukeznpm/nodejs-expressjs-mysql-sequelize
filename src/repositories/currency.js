const db = require('../models/index.js');
const { currency } = db;

module.exports.createCurrencyInWallet = async (
	userId,
	walletId,
	name,
	amount,
	currencyBaseId
) => {
	try {
		const insert = {
			name: name,
			amount: amount,
			currencyBaseId: currencyBaseId,
			userId: userId,
			walletId: walletId,
		}
		const createCurrencyInWallet = await currency.create(insert);

		return createCurrencyInWallet;
	} catch (err) {
		throw err;
	}
}

module.exports.getCurrencyWalletById = async (userId, walletId, currencyBaseId) => {
	try {
		let [wallet] = await currency.findAll({
			where: {
				userId: Number(userId),
				walletId: Number(walletId),
				currencyBaseId: Number(currencyBaseId)
			}
		});

		return wallet;
	} catch (err) {
		throw err;
	}
};

module.exports.updateCurrencyWalletById = async (
	userId,
	walletId,
	currencyBaseId,
	amount
) => {
	try {
		const update = {
			amount: amount
		}
		await currencyBase.update(update, {
			where: {
				userId: Number(userId),
				walletId: Number(walletId),
				currencyBaseId: Number(currencyBaseId)
			}
		});

		return true;
	} catch (err) {
		throw err;
	}
};