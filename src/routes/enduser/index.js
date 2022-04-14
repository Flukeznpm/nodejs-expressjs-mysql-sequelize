const express = require("express");
const router = express();

router.get("/test", async (req, res, next) => {
	try {
		res.status(200).send({ message: "Test API" })
	} catch (err) {
		next(err);
	}
});

//####################### User #######################//


module.exports = router;