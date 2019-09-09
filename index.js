const express = require('express')
const app = express()
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))

app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))
app.get('/places/:id', require('./controllers/getPlace'))
app.patch('/places/:id', require('./controllers/patchPlace'))
app.delete('/places/:id', require('./controllers/deletePlace'))

app.post('/type', require('./controllers/postType'))

app.get('/types', require('./controllers/getTypes'))
app.post('/users', require('./controllers/postUsers'))

app.post('/amenities', require('./controllers/postAmenities'))
app.get('/amenities', require('./controllers/getAmenities'))

app.get('/reviews/:id', require('./controllers/getReviews'))
app.post('/reviews', require('./controllers/postReviews'))


app.listen(4000, () => {
	console.log('Ready on port 4000');
})
