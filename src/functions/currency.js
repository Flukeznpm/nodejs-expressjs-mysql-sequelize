const currencyRepo = require("../repositories/currency");

module.exports.createCurrencyInWallet = async (
	userId,
	walletId,
	name,
	amount
) => {
	try {
		const createCurrencyInWallet = await currencyRepo.createCurrencyInWallet(
			userId,
			walletId,
			name,
			amount
		);
		return createCurrencyInWallet;
	} catch (err) {
		throw err;
	}
};

