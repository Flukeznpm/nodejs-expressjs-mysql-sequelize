const express = require("express");
const router = express();
const userFunction = require("../../functions/user");
const walletFunction = require("../../functions/wallet");
const currencyFunction = require("../../functions/currency");
const transactionFunction = require("../../functions/transaction");

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
		const userId = req.params.userId;
		const { name } = req.body;
		const wallet = await walletFunction.createWallet(
			name,
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
		const { name, amount, currencyBaseId } = req.body;
		const currency = await currencyFunction.createCurrencyInWallet(
			userId,
			walletId,
			name,
			amount,
			currencyBaseId
		);
		res.status(201).send(currency);
	} catch (err) {
		next(err);
	}
});

//####################### Transaction #######################//
router.post("/transfer", async (req, res, next) => {
	try {
		const { giverId, receiverId, transaction } = req.body;
		const transfer = await transactionFunction.transfer(
			giverId,
			receiverId,
			transaction
		);
		res.status(200).send(transfer);
	} catch (err) {
		next(err);
	}
});

module.exports = router;