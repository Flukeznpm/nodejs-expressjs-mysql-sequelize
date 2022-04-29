const db = require('../models/index.js');
const { user } = db;

module.exports.createUser = async (
	firstname,
	lastname,
) => {
	try {
		const insert = {
			firstname: firstname,
			lastname: lastname,
		}
		const createUser = await user.create(insert);

		return createUser;
	} catch (err) {
		throw err;
	}
}