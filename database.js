const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.MONGODB_URI, {userNewUrlParser: true}, (err) => {
	err ? console.log(err) : console.log('Connected to MongoDB')
})
