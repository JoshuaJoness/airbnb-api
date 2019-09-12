const Place = require('../models/place')
const Review = require('../models/review')
const Amenity = require('../models/amenity')

module.exports = (req,res) => {
	Place.findById(req.params.id)
	.populate('type')
	.populate('amenities')
	.populate({path: 'host', select: 'name avatar'})
	.lean()
	.then(data => {
		// {
		// title: 'werwer', price: 434, _id: 123
		//}
					// Amenity.find({place: data._id}).then(amenities => {
					// 	data.amenities = amenities
					// })
					Review.find({place: data._id}).populate('author').then(reviews => {
						// [
						// 	{ _id: 567, content: '234324'},
						// 	{ _id: 999, content: 'eeee'}
						// ]
							data.reviews = reviews
							// {
							// title: 'werwer', price: 434, _id: 123, reviews: [...]
							//}



							res.send(data)
					})
	})
}
