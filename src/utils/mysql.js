const mysql = require('mysql');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB_NAME } = process.env;

const db = mysql.createConnection({
	host: MYSQL_HOST,
	user: MYSQL_USER,
	password: MYSQL_PASSWORD,
	database: MYSQL_DB_NAME
});

db.connect((err) => {
	if (err) {
		console.log('----- Connection Databsde Error ! ---> ', err);
	} else {
		console.log("----- Connected Database !");
	}
});

module.exports = { db };