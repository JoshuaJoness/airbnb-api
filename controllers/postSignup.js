const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
	console.log(req.body)
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	console.log('>>>>>>>>>>>>>', req.body.password);
	User.create(req.body)
		.then(data => {
		res.send(data)
	}).catch (err => {
		console.log(err)
	})
	}
