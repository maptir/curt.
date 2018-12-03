var express = require('express')
var router = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')

let Product = require('../models/product')

const cartWithProductDetail = async cart => {
  return await Promise.all(
    cart.map(async cartItem => {
      let product = await Product.findOne({ _id: cartItem.productId }).exec()
      product.quantity = cartItem.quantity
      return product
    }),
  )
}

router.get('/', isAuthenticated, async (req, res) => {
  res.send(await cartWithProductDetail(req.user.cart))
})

router.put('/edit', isAuthenticated, async (req, res) => {
  const findProductInCart = req.user.cart.find(
    cartItem => cartItem.productId === req.body.productId,
  )

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
      return res.sendStatus(404)
    }
  })
  res.send(await cartWithProductDetail(req.user.cart))
})

router.post('/remove', isAuthenticated, async (req, res) => {
  req.user.cart = req.user.cart.filter(
    cartItem => cartItem.productId !== req.body.productId,
  )

  req.user.save(err => {
    if (err) return res.sendStatus(404)
  })
  res.send(await cartWithProductDetail(req.user.cart))
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
