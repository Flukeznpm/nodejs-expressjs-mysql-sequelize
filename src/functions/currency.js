const currencyRepo = require("../repositories/currency");

module.exports.createCurrencyInWallet = async (
	userId,
	walletId,
	name,
	amount,
	currencyBaseId
) => {
	try {
		const createCurrencyInWallet = await currencyRepo.createCurrencyInWallet(
			userId,
			walletId,
			name,
			amount,
			currencyBaseId
		);
		return createCurrencyInWallet;
	} catch (err) {
		throw err;
	}
};

module.exports.getCurrencyWalletById = async (userId, walletId, currencyBaseId) => {
	try {
		const wallet = await currencyRepo.getCurrencyWalletById(
			userId,
			walletId,
			currencyBaseId
		);
		if (!wallet) return {};
		return wallet;
	} catch (err) {
		throw err;
	}
};

module.exports.updateCurrencyWalletById = async (userId, walletId, currencyBaseId, amount) => {
	try {
		const wallet = await currencyRepo.updateCurrencyWalletById(
			userId,
			walletId,
			currencyBaseId,
			amount
		);
		return wallet;
	} catch (err) {
		throw err;
	}
};