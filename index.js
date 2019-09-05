const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/databasename', (userNewUrlParser: true), (err) => {
	err ? console.log(err) : console.log('Connected to MongoDB')
})

app.get('/', require('./controllers/root'))


app.get('/places', require('./controllers/getPlaces'))

app.listen(4000, () => {
	console.log('Ready on port 4000');
})
