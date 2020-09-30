const Pool = require('pg').Pool

const pool = new Pool({
	user: 'ianwessen',
	password: '',
	host: 'localhost',
	port: 5432,
	database: 'nought',
})

module.exports = pool
