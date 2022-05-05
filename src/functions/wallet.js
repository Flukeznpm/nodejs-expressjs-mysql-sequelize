const walletRepo = require("../repositories/wallet");

module.exports.createWallet = async (
	name,
	userId
) => {
	try {
		const createWallet = await walletRepo.createWallet(
			name,
			userId
		);
		return createWallet;
	} catch (err) {
		throw err;
	}
};

module.exports.getWalletById = async (walletId, userId) => {
	try {
		const wallet = await walletRepo.getWalletById(walletId, userId);
		return wallet;
	} catch (err) {
		throw err;
	}
};