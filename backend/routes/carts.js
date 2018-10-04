var _ = require('lodash')
var express = require('express')
var router = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/', isAuthenticated, (req, res) => {
  res.send(req.user.cart)
})

router.post('/clear', isAuthenticated, (req, res) => {
  req.user.updateOne({ cart: [] }, err => {
    if (err) return res.sendStatus(404)
  })
  res.sendStatus(200)
})

router.post('/add', isAuthenticated, (req, res) => {
  const findProductInCart = _.find(req.user.cart, { id: req.body._id })

  if (findProductInCart) {
    req.user.updateOne(
      {
        cart: req.user.cart.map(cartItem => {
          if (cartItem.id === req.body._id) {
            cartItem.quantity = cartItem.quantity + 1
          }
          return cartItem
        }),
      },
      err => {
        if (err) return res.sendStatus(404)
      },
    )
  } else {
    req.user.cart.push({ id: req.body._id, quantity: 1 })
    req.user.save()
  }
  res.sendStatus(200)
})

module.exports = router
