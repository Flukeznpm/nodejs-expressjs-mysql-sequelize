const walletRepo = require("../repositories/wallet");

module.exports.createWallet = async (
	name,
	totalAmount,
	userId
) => {
	try {
		const createWallet = await walletRepo.createWallet(
			name,
			totalAmount,
			userId
		);
		return createWallet;
	} catch (err) {
		throw err;
	}
};

