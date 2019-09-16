const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
console.log('----------------', req.body);
let token = localstorage.gettoken
User.findOne({jwt.verify(token, process.env.SECRET)}).then(data => {
	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>', data)
		res.send({data})
	}
}).catch(err => {
	alert(err, 'No user exists...')
})
}
