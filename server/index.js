const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db.js')

// Use middleware
app.use(cors())
app.use(express.json())

// Routes

// Create a todo
app.post('/todos', async (req, res) => {
	try {
		const { description } = req.body
		const newTodo = await pool.query(
			// `...RETURNING *` ensures the db returns data from INSERT result
			'INSERT INTO todo (description) VALUES($1) RETURNING *',
			// Inserts at $1 `...VALUES($1)...`
			[description]
		)

		res.json(newTodo.rows[0])
	} catch (err) {
		console.error(err.message)
	}
})

// Get all todos
app.get('/culture', async (req, res) => {
	try {
		//
	} catch (err) {
		//
	}
})

// Update a todo

app.listen(5000, () => {
	console.log('server has started on port 5000')
})
