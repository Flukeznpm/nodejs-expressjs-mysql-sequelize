const db = require('../models/index.js');
const { currencyBase } = db;

module.exports.createCurrencyBase = async (
	name,
	exchangeRate
) => {
	try {
		const create = {
			name: name,
			exchangeRate: exchangeRate
		}
		const createCurrencyBase = await currencyBase.create({
			name: name,
			exchangeRate: exchangeRate
		});
		return createCurrencyBase;
	} catch (err) {
		throw err;
	}
};