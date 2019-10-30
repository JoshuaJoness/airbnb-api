const Place = require('../models/place')
const Review = require('../models/review')
module.exports = (req, res) => {
    let x = {}
    if (req.query.max_price){
        x.price = {$gte: req.query.max_price}
    }
    if (req.query.min_jacks){
        x.bathrooms = {$gte: req.query.min_jacks}
    }
    if (req.query.min_guests){
        x.guests = {$gte: req.query.min_guests}
    }
    Place.find(x)
    .select('bedrooms city country images price title type rating')
    .populate('type')
    .populate('amenities')
    .populate({path: 'host', select: 'name avatar'})
    .lean()
    .then(data => {
        let places = data.map(p => {
            p.image = p.images[0]
     delete p.images
            return Review.find({place: p._id}).then(reviews => {
                p.reviews = reviews.length
                return p
            })
        })
        Promise.all(places).then(data => {
            res.send(data)
        })
    })
}
