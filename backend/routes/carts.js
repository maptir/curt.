var express = require('express')
var router = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/', isAuthenticated, (req, res) => {
  res.send(req.user.cart)
})

router.post('/', isAuthenticated, (req, res) => {
  req.user.cart.push(req.body.item)
  req.user.save(err => {
    if (err) {
      res.send(404)
    } else {
      res.send(202)
    }
  })
})

module.exports = router
