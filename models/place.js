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
	},
	images: [
		{
		type: String,
		default: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/for_sale_viax.svg'
		}
	],
	amenities: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'amenity'
		}
	],
}
)

module.exports = Place
