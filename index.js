const express = require('express')
const app = express()
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(4000, () => {
	console.log('Ready on port 4000');
})
