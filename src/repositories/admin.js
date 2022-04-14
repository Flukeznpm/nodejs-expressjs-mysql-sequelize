const db = require('../models/index.js');
const { admin } = db;

module.exports.permission = async (adminId) => {
	try {
		const permission = await admin.findAll({
			where: {
				adminId: Number(adminId)
			}
		})

		return permission;
	} catch (err) {
		throw err;
	}
}

module.exports.getAllAdmin = async (page = 1, limit = 10) => {
	try {
		const offset = (page - 1) * limit;
		let allAdmin = await admin.findAndCountAll({
			limit: Number(limit),
			offset: Number(offset),
		})

		return allAdmin;
	} catch (err) {
		throw err;
	}
};


module.exports.createAdmin = async (
	firstname,
	lastname,
	permission
) => {
	try {
		const insert = {
			firstname: firstname,
			lastname: lastname,
			permission: permission
		}
		const createAdmin = await admin.create(insert);

		return createAdmin;
	} catch (err) {
		throw err;
	}
}