const Review = require('../models/review')

module.exports = (req, res) => {
Review.find({place: req.params.id}).then(data => {
	res.send(data)
}).catch(err => {
	console.log(err)
})
}
