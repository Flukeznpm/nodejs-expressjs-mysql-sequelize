const express = require("express");
const router = express();
const userFunction = require("../../functions/user");
const walletFunction = require("../../functions/wallet");
const currencyFunction = require("../../functions/currency");

router.get("/test", async (req, res, next) => {
	try {
		res.status(200).send({ message: "Test API" })
	} catch (err) {
		next(err);
	}
});

//####################### User #######################//
router.post("/mock/user", async (req, res, next) => {
	try {
		const { firstname, lastname } = req.body;
		const user = await userFunction.createUser(
			firstname,
			lastname,
		);
		res.status(201).send(user);
	} catch (err) {
		next(err);
	}
});

//####################### Wallet #######################//
router.post("/mock/:userId/wallet", async (req, res, next) => {
	try {
		const userId = req.params;
		const { name, totalAmount } = req.body;
		const wallet = await walletFunction.createWallet(
			name,
			totalAmount,
			userId
		);
		res.status(201).send(wallet);
	} catch (err) {
		next(err);
	}
});

//####################### Currency In Wallet #######################//
router.post("/mock/:userId/:walletId/currency", async (req, res, next) => {
	try {
		const { userId, walletId } = req.params;
		const { name, amount } = req.body;
		const currency = await currencyFunction.createCurrencyInWallet(
			userId,
			walletId,
			name,
			amount
		);
		res.status(201).send(currency);
	} catch (err) {
		next(err);
	}
});

module.exports = router;