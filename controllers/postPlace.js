const Place = require('../models/place')
module.exports = (req, res) => {
	console.log(req.body);
	Place.create(req.body).then(data =>
	res.send(data)
).catch(err => {
	console.log(err);
})}
