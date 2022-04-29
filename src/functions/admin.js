const adminRepo = require("../repositories/admin");

module.exports.permission = async (req, res, next) => {
	try {
		const adminId = req.query.adminId || req.param.adminId;
		const permission = await adminRepo.permission(adminId);

		if (!permission.length) {
			throw { status: 401, message: "Access denied" };
		}

		return permission[0].permission === 1 ? true : false;
	} catch (err) {
		next(err);
	}
};

module.exports.getAllAdmin = async (page, limit) => {
	try {
		const allAdmin = await adminRepo.getAllAdmin(page, limit);
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
		const createAdmin = await adminRepo.createAdmin(
			firstname,
			lastname,
			permission
		);
		return createAdmin;
	} catch (err) {
		throw err;
	}
};