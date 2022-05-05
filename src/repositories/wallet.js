const db = require('../models/index.js');
const { wallet } = db;

module.exports.createWallet = async (
	name,
	userId
) => {
	try {
		const insert = {
			name: name,
			userId: Number(userId),
			totalAmount: 0
		}
		const createWallet = await wallet.create(insert);

		return createWallet;
	} catch (err) {
		throw err;
	}
}

module.exports.getWalletById = async (walletId, userId) => {
	try {
		let [wallet] = await wallet.findAll({
			where: {
				walletId: Number(walletId),
				userId: Number(userId)
			}
		});

		return wallet;
	} catch (err) {
		throw err;
	}
};
