const express = require("express");
const router = express();
const { db } = require("../../utils/mysql");

router.get("/test", async (req, res, next) => {
	try {
		db.query(`select * from team`, (err, result) => {
			res.status(200).send(result);
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;