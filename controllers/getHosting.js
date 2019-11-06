const Place = require('../models/place')

module.exports = (req,res) => {
	console.log(req.body._id);
	Place.find({host:req.body._id})
	.lean()
	.then(data=>{
		let places = data.map(p => {
			p.image = p.images[0]
			delete p.images
			return p
		})
		Promise.all(places).then(data => {
			console.log('places',data);
			res.send(data)
		})
	})
}
