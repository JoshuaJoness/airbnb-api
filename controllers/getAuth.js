const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
console.log('----------------', req.body);
let user = jwt.verify(req.query.token, process.env.SECRET)
delete user.password
// remove the password
res.send(user)
}
