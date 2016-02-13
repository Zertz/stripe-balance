**DEPRECATED: please use the [Stripe API](https://stripe.com/docs/api/node#balance) directly**

stripe-balance
==============

[![npm version](https://badge.fury.io/js/stripe-balance.svg)](https://badge.fury.io/js/stripe-balance) [![Build Status](https://travis-ci.org/Zertz/stripe-balance.svg?branch=master)](https://travis-ci.org/Zertz/cloudcp) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Retrieve Stripe account balance

API
---

```javascript
var stripeBalance = require('stripe-balance')

stripeBalance({
  secretKey: 'stripe-secret',
  account: 'stripe-account'
}, function (err, balance) {
  /*
    balance: {
      amount_available: 0,
      amount_pending: 0
    }
  */
})
```

License
-------

[MIT](https://github.com/Zertz/stripe-balance/blob/master/LICENSE)
