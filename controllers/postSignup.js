const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	console.log(req.body)
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	console.log('>>>>>>>>>>>>>', req.body.password);
	User.create(req.body)
		.then(data => {
			let obj = data.toObject()
			let token = jwt.sign(obj, process.env.SECRET)

			res.send(token)
	}).catch (err => {
		console.log(err)
	})
	}
