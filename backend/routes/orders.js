const express = require('express')
const router = express.Router()

const Order = require('../models/order')
const User = require('../models/user')
const Product = require('../models/product')

const isAuthenticated = require('../middlewares/isAuthenticated')

router.post('/create', isAuthenticated, (req, res) => {
  let newOrder = new Order({
    purchasedList: req.user.cart,
    dateTime: new Date(),
    totalPrice: req.user.cart
      .reduce((acc, cur) => acc + cur.price, 0)
      .toLocaleString(),
    shippingAddress: req.body.shippingAddress,
    userId: req.user._id,
  })

  let errors = req.validationErrors()
  if (errors) {
    console.log(errors)
  } else {
    newOrder.save(err => {
      if (err) {
        console.log(err)
        return
      } else {
        res.send(newOrder)
      }
    })
  }
})

router.get('/:id/fullDetail', (req, res) => {
  let data = {
    firstname: '',
    lastname: '',
    shippingAddress: '',
    purchasedList: [],
    totalPrice: 0,
  }
  Order.findById(req.params.id, (err, order) => {
    if (err) {
      console.log(err)
    } else {
      User.findById(order.userId, async (err, user) => {
        if (err) {
          console.log(err)
        } else {
          data.firstname = user.firstname
          data.lastname = user.lastname
          data.shippingAddress = order.shippingAddress
          data.status = order.status
          data.totalPrice = order.totalPrice
          data.purchasedList = await Promise.all(
            order.purchasedList.map(async item => {
              try {
                const product = await Product.findOne({
                  id: item.productID,
                }).exec()
                return { product, quantity: item.quantity }
              } catch (error) {
                console.log(error)
              }
            }),
          )
          res.send(data)
        }
      })
    }
  })
})

router.delete('/:id', (req, res) => {
  let query = {
    _id: req.params.id,
  }
  Order.remove(query, err => {
    if (err) {
      console.log(err)
    } else {
      res.send('Delete Success')
    }
  })
})

module.exports = router
