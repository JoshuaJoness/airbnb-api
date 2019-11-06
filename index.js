const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
cloud_name: "doflsgrub",
api_key: "242532588117141",
api_secret: "7H0UMIZKiBfcCfnkhbm2j0tsH1A"
});
const storage = cloudinaryStorage({
cloudinary: cloudinary,
folder: "demo",
allowedFormats: ["jpg", "png"],
transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.use(cors({credentials: true}))


app.get('/places', require('./controllers/getPlaces'))

app.post('/place', parser.single("image"), require('./controllers/postPlace'))

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

app.post('/signup', require('./controllers/postSignup'))

app.post('/login', require('./controllers/postLogin'))

app.get('/auth', require('./controllers/getAuth'))

app.post('/pay', require('./controllers/postPay'))

app.post('/hosting', require('./controllers/getHosting'))

app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`);
})
