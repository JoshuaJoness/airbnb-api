const Place = require('../models/place')

module.exports = (req,res) => {
	Place.findById(req.query).then(data =>
		res.send(data)
	).catch(err => {
		console.log(err)
	})
}
