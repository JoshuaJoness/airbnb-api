const mongoose = require('mongoose')

const Review = mongoose.model('review', {
	author:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true
	},
	date: {
		type: Date,
		default: Date.Now
	},
	rating: {
		type: Number,
		default: 0
	},
	content: {
		type: String,
		required: true
	},
	place: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'place'
	}
})
