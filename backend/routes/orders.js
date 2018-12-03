const express = require('express')
const axios = require('axios')
const config = require('../config')
const router = express.Router()

const Order = require('../models/order')
const Product = require('../models/product')

const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/', isAuthenticated, (req, res) => {
  Order.find({ userId: req.user._id }, async (err, orders) => {
    if (err) {
      console.log(err)
    } else {
      const orderWithDetails = await Promise.all(
        orders.map(async order => {
          return {
            id: order._id,
            address: order.address,
            district: order.district,
            country: order.country,
            postalCode: order.postalCode,
            contact: order.contact,
            dateTime: order.dateTime,
            purchasedList: await Promise.all(
              order.purchasedList.map(async item => {
                try {
                  const product = await Product.findOne({
                    _id: item.productId,
                  }).exec()
                  return { product, quantity: item.quantity }
                } catch (error) {
                  console.log(error)
                }
              }),
            ),
          }
        }),
      )
      res.send(orderWithDetails)
    }
  })
})

router.post('/payment', isAuthenticated, async (req, res) => {
  console.log(req.body)
  const { data } = await axios.post(
    'https://api.omise.co/charges',
    {
      description: 'Test payment',
      amount: 99900,
      currency: 'thb',
      card: req.body.token_id,
    },
    {
      auth: {
        username: config.OMISE_KEY_SECRET,
      },
    },
  )
  return res.send(data)
})

router.post('/create', isAuthenticated, (req, res) => {
  let newOrder = new Order({
    purchasedList: req.user.cart,
    dateTime: new Date(),
    userId: req.user._id,
    ...req.body,
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
