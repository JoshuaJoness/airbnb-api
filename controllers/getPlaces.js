const Place = require('../models/place')

module.exports = (req, res) => {
Place.find({}).then(data => {
	res.send(data)
})
}

//exporting a function that takes a req and res and exports some data
