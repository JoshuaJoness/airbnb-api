const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
console.log('----------------', req.body);
User.findOne({email: req.body.email}).select('password').then(data => {
	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>', data.password)
	//where do I put the error message if no such user is found?
	//the data is not coming back with a password, had to use select, why?
	let match = bcrypt.compareSync(req.body.password, data.password)
	console.log('?????????????????????', match);
	if (match) {
		let obj = data.toObject()
		let token = jwt.sign(obj, process.env.SECRET)
		console.log(']]]]]]]]]]]]]]]]]]]]]]]]]', token);
		res.send({token})
	}
}).catch(err => {
	alert(err, 'No user exists...')
})
}



// console.log('=================', match);
// delete data.password
