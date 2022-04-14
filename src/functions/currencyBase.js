const currencyBaseRepo = require("../repositories/currencyBase");

module.exports.createCurrencyBase = async (
	name,
	exchangeRate
) => {
	try {
		const createCurrencyBase = await currencyBaseRepo.createCurrencyBase(
			name,
			exchangeRate
		);
		return createCurrencyBase;
	} catch (err) {
		throw err;
	}
};