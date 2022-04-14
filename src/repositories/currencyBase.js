const db = require('../models/index.js');
const { currencyBase } = db;
const { toUpper } = require('lodash');

module.exports.getAllCurrencyBase = async (page = 1, limit = 10) => {
	try {
		const offset = (page - 1) * limit;
		let allCurrencyBase = await currencyBase.findAndCountAll({
			limit: Number(limit),
			offset: Number(offset),
		})

		return allCurrencyBase;
	} catch (err) {
		throw err;
	}
};

module.exports.createCurrencyBase = async (listCurrency) => {
	try {
		for (const currency of listCurrency) {
			let [isExist] = await currencyBase.findAll({
				where: {
					name: toUpper(currency.name)
				}
			})
			if (!isExist) {
				const insert = {
					name: currency.name,
					exchangeRate: currency.exchangeRate
				}
				await currencyBase.create(insert);
			}
		}

		return true;
	} catch (err) {
		throw err;
	}
};

module.exports.manageCurrencyBase = async (listCurrency) => {
	try {
		for (const currency of listCurrency) {
			let [isExist] = await currencyBase.findAll({
				where: {
					name: toUpper(currency.name)
				}
			})
			if (isExist) {
				const update = {
					name: currency.name,
					exchangeRate: currency.exchangeRate
				}
				await currencyBase.update(update, {
					where: {
						name: toUpper(currency.name)
					}
				});
			}
		}

		return true;
	} catch (err) {
		throw err;
	}
};