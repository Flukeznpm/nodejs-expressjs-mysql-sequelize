const express = require("express");
const router = express();
const currencyBaseFunction = require("../../functions/currencyBase");

router.post("/currencyBase/create", async (req, res, next) => {
	try {
		const { name, exchangeRate } = req.body;
		const currencyBase = await currencyBaseFunction.createCurrencyBase(
			name,
			exchangeRate
		);
		res.status(201).send(currencyBase);
	} catch (err) {
		next(err);
	}
});

module.exports = router;