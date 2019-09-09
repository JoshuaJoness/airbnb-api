const Place = require('../models/place')

module.exports = (req,res) => {
	Place.findById(req.query).populate('type').populate({path: 'host', select: 'name avatar'}).then(data =>
		res.send(data)
	).catch(err => {
		console.log(err)
	})
}
