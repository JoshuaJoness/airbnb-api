const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

module.exports = (req, res) => {
	stripe.charges.create({
  amount: req.body.amount,
  currency: 'usd',
  description: req.body.title,
  source: req.body.token.id
}).then(data => {
	console.log(data)
}).catch(err => {
	console.log(err)
})
}
