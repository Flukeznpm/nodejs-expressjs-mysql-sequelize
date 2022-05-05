const currencyBaseFunction = require("./currencyBase");
const currencyFunction = require("./currency");

module.exports.transfer = async (
	giverId,
	receiverId,
	transaction
) => {
	try {
		const exchanges = transaction.exchange.split("/");
		const exchange1 = exchanges[0];
		const exchange2 = exchanges[1];
		const currencyBase1 = await currencyBaseFunction.getCurrencyBaseById(exchange1);
		const currencyBase2 = await currencyBaseFunction.getCurrencyBaseById(exchange2);

		// * Giver
		// Check amount of currency-exchange1 in giver's wallet that is over transaction amount?.
		const giverWalletCurrency1 = await currencyFunction.getCurrencyWalletById(
			giverId,
			transaction.giverWalletId,
			currencyBase1.currencyBaseId
		);
		let finallyTransferAmount = 0;
		if (!giverWalletCurrency1) {
			throw { status: 400, message: "This currency is not exist in wallet." }
		} else {
			giverWalletCurrency1.amount < transaction.amount
				? finallyTransferAmount = giverWalletCurrency1.amount
				: finallyTransferAmount = transaction.amount
		}
		// หักเงินใน currency ตาม wallet ของ giver
		await currencyFunction.updateCurrencyWalletById(
			giverId,
			transaction.giverWalletId,
			currencyBase1.currencyBaseId,
			(giverWalletCurrency1.amount - finallyTransferAmount)
		);

		// * Receiver
		// เพิ่มเงินใน currency ตาม wallet ของ Receiver
		const receiverWalletCurrency2 = await currencyFunction.getCurrencyWalletById(
			receiverId,
			transaction.receiverWalletId,
			currencyBase2.currencyBaseId
		);
		const exchange2Amount = finallyTransferAmount * currencyBase2.exchangeRate;
		// Checkว่ามี currency ในกระเป่าไหม ? ถ้ามีก็เพิ่มเลย : ถ้าไม่มีต้อง create currencyก่อน แล้วค่อยเพิ่มเงิน
		if (!receiverWalletCurrency2) {
			await currencyFunction.createCurrencyInWallet(
				receiverId,
				transaction.receiverWalletId,
				exchange2,
				exchange2Amount,
				currencyBase2.currencyBaseId
			);
		} else {
			await currencyFunction.updateCurrencyWalletById(
				receiverId,
				transaction.receiverWalletId,
				currencyBase2.currencyBaseId,
				(receiverWalletCurrency2.amount + exchange2Amount)
			);
		}

		return {
			giver: {
				giverId: giverId,
				walletId: transaction.giverWalletId,
				currencyName: exchange1,
				amount: giverWalletCurrency1.amount - finallyTransferAmount
			},
			receiver: {
				receiverId: receiverId,
				walletId: transaction.receiverWalletId,
				currencyName: exchange2,
				amount: receiverWalletCurrency2.amount + exchange2Amount
			}
		}
	} catch (err) {
		throw err;
	}
};