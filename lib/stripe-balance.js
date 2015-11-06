function stripeBalance (opts, cb) {
  var stripe = require('stripe')(opts.secretKey)

  stripe.balance.retrieve({
    stripe_account: opts.account
  }, function (err, balance) {
    if (err) {
      return cb(err)
    }

    ['pending', 'available'].forEach(function (status) {
      for (var i = 0, length = balance[status].length; i < length; i++) {
        if (!balance['amount_' + status]) {
          balance['amount_' + status] = 0
        }

        balance['amount_' + status] += balance[status][i].amount
      }
    })

    cb(null, balance)
  })
}

module.exports = stripeBalance
