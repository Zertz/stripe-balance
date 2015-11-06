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
  console.log(balance)
})
```

License
-------

[MIT](https://github.com/Zertz/stripe-balance/blob/master/LICENSE)
