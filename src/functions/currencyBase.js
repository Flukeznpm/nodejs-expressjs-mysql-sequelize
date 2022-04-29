const currencyBaseRepo = require("../repositories/currencyBase");

module.exports.getAllCurrencyBase = async (page, limit) => {
	try {
		const allurrencyBase = await currencyBaseRepo.getAllCurrencyBase(page, limit);
		return allurrencyBase;
	} catch (err) {
		throw err;
	}
};

module.exports.createCurrencyBase = async (listCurrency) => {
	try {
		const createCurrencyBase = await currencyBaseRepo.createCurrencyBase(listCurrency);
		return createCurrencyBase;
	} catch (err) {
		throw err;
	}
};

module.exports.manageCurrencyBase = async (listCurrency) => {
	try {
		const manageCurrencyBase = await currencyBaseRepo.manageCurrencyBase(listCurrency);
		return manageCurrencyBase;
	} catch (err) {
		throw err;
	}
};