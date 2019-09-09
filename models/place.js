const mongoose = require('mongoose')

const Place = mongoose.model('place', {
	title: {
		type: String,
		required: [true, 'title is required']
		},
	description: {
		type: String,
		required: [true, 'description is required']
		},
	type: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "type",
		required: [true, 'type is required'],
		},
	city: {
		type: String,
		required: [true, 'city is required'],
		},
	country: {
		type: String,
		required: [true, 'country is required'],
		},
	price: {
		type: Number,
		required: [true, 'price is required'],
		},
	rating: {
		type: Number,
		default: 0
		},
	guests: {
		type: Number,
		required: [true, 'number of guests required'],
		},
	bathrooms: {
		type: Number,
		required: [true, 'number of bathrooms required']
	},
	host: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	}
	}
)

module.exports = Place
