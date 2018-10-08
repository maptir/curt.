var _ = require('lodash')
var express = require('express')
var router = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/', isAuthenticated, (req, res) => {
  res.send(req.user.cart)
})

router.put('/edit', isAuthenticated, (req, res) => {
  console.log('User cart', req.user.cart)

  const findProductInCart = _.find(req.user.cart, {
    productId: req.body.productId,
  })

  if (findProductInCart) {
    req.user.updateOne(
      {
        cart: req.user.cart.map(cartItem => {
          if (cartItem.productId === req.body.productId)
            cartItem.quantity = req.body.quantity
          return cartItem
        }),
      },
      err => {
        if (err) return res.sendStatus(404)
      },
    )
  } else {
    req.user.cart.push(req.body)
  }
  req.user.save(err => {
    if (err) {
      console.log(err)
      return res.sendStatus(404)
    }
  })
  res.send(req.user.cart)
  res.sendStatus(200)
})

router.delete('/delete', isAuthenticated, (req, res) => {
  req.user.cart = req.user.cart.filter(
    cartItem => cartItem.productId !== req.body.productId,
  )
  req.user.save(err => {
    if (err) return res.sendStatus(404)
  })
  res.send(req.user.cart)
  res.sendStatus(200)
})

router.post('/clearAll', isAuthenticated, (req, res) => {
  req.user.updateOne({ cart: [] }, err => {
    if (err) return res.sendStatus(404)
  })
  req.user.save(err => {
    if (err) return res.sendStatus(404)
  })
  res.sendStatus(200)
})

module.exports = router
