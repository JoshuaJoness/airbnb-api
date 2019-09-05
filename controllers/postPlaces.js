const Place = require('../models/place')

module.exports = (req, res) => {
	Place.create({
	title: 'Unbelievable Infinite Pool',
	description: 'Very nice!',
	type: 'Villa',
	city: 'Toronto',
	country: 'Canada',
	price: 100,
	guests: 2,
	bathrooms: 3
}).then( (data) => {
	res.send(data)
} )

}
