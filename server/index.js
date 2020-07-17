const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// Use middleware
app.use(cors())
app.use(express.json())

// Routes

// Create a todo

// Get all todos

// Update a todo

app.listen(5000, () => {
	console.log('server has started on port 5000')
})
