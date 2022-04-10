const express = require("express");
const router = express();

router.get("/test", async (req, res, next) => {
	try {
		res.send("test");
	} catch (err) {
		next(err);
	}
});

module.exports = router;