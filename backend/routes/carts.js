var _ = require('lodash')
var express = require('express')
var router = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/', isAuthenticated, (req, res) => {
  res.send(req.user.cart)
})

router.put('/edit', isAuthenticated, (req, res) => {
  const findProductInCart = _.find(req.user.cart, { id: req.body._id })

  if (findProductInCart) {
    req.user.updateOne(
      {
        cart: req.user.cart.map(cartItem => {
          if (cartItem.id === req.body._id)
            cartItem.quantity = req.body.quantity
          return cartItem
        }),
      },
      err => {
        if (err) return res.sendStatus(404)
      },
    )
  } else {
    req.user.cart.push({ id: req.body._id, quantity: req.body.quantity })
  }
  req.user.save()
  res.sendStatus(200)
})

router.delete('/delete', isAuthenticated, (req, res) => {
  req.user.cart = req.user.cart.filter(cartItem => cartItem.id !== req.body._id)
  req.user.save(err => {
    if (err) return res.sendStatus(404)
  })
  res.sendStatus(200)
})

router.post('/clearAll', isAuthenticated, (req, res) => {
  req.user.updateOne({ cart: [] }, err => {
    if (err) return res.sendStatus(404)
  })
  res.sendStatus(200)
})

module.exports = router
