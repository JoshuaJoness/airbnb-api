const Amenity = require('../models/amenity.js')

module.exports = (req, res) => {
	Amenity.create(req.body).then(data =>
	res.send(data)).catch(err => {
		console.log(err)
	})
}
