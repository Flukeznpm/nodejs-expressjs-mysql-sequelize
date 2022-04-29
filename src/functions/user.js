const userRepo = require("../repositories/user");

module.exports.createUser = async (
	firstname,
	lastname,
) => {
	try {
		const createUser = await userRepo.createUser(
			firstname,
			lastname,
		);
		return createUser;
	} catch (err) {
		throw err;
	}
};