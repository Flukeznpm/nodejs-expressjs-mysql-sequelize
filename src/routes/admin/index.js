const express = require("express");
const router = express();
const currencyBaseFunction = require("../../functions/currencyBase");
const adminFunction = require("../../functions/admin");
const { permission } = adminFunction;

//####################### Admin #######################//
router.get("/mock/admin", async (req, res, next) => {
	try {
		const { page, limit } = req.query;
		const allAdmin = await adminFunction.getAllAdmin(
			page,
			limit
		);
		res.status(201).send(allAdmin);
	} catch (err) {
		next(err);
	}
});

router.post("/mock/admin", async (req, res, next) => {
	try {
		const { firstname, lastname, permission } = req.body;
		const admin = await adminFunction.createAdmin(
			firstname,
			lastname,
			permission
		);
		res.status(201).send(admin);
	} catch (err) {
		next(err);
	}
});

//####################### CurrencyBase #######################//
router.get("/currencyBase", async (req, res, next) => {
	try {
		const { page, limit } = req.query;
		const allCurrencyBase = await currencyBaseFunction.getAllCurrencyBase(
			page,
			limit
		);
		res.status(200).send(allCurrencyBase);
	} catch (err) {
		next(err);
	}
});

router.post("/currencyBase/create", async (req, res, next) => {
	try {
		const listCurrency = req.body;
		const currencyBase = await currencyBaseFunction.createCurrencyBase(listCurrency);
		res.status(201).send(
			{
				message: currencyBase
					? 'Insert currency success.'
					: 'Something went wrong!'
			}
		);
	} catch (err) {
		next(err);
	}
});

router.put("/currencyBase/manage", async (req, res, next) => {
	try {
		const listCurrency = req.body;
		const currencyBase = await currencyBaseFunction.manageCurrencyBase(listCurrency);
		res.status(201).send(
			{
				message: currencyBase
					? 'Update currency success.'
					: 'Something went wrong!'
			}
		);
	} catch (err) {
		next(err);
	}
});

module.exports = router;