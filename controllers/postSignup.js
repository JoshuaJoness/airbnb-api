const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	User.create(req.body)
		.then(data => {
			let obj = data.toObject()
			let token = jwt.sign(obj, process.env.SECRET)
			console.log(token);
			res.send(token)
	}).catch (err => {
		console.log(err)
	})
	}
