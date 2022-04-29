const db = require('../models/index.js');
const { wallet } = db;

module.exports.createWallet = async (
	name,
	totalAmount,
	userId
) => {
	try {
		const insert = {
			name: name,
			totalAmount: totalAmount,
			userId: userId
		}
		const createWallet = await wallet.create(insert);

		return createWallet;
	} catch (err) {
		throw err;
	}
}