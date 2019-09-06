const express = require('express')
const app = express()
const mongoose = require('mongoose')
const database = require('./database')

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))

app.listen(4000, () => {
	console.log('Ready on port 4000');
})
