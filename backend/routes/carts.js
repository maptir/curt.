var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router()

// Bring in User Models
let User = require('../models/user')

// GET User cart
router.get('/', function(req, res) {
  var info = req.header.authorization.split(' ')
  var token = info[1]

  jwt.verify(token, 'shhhhh', (err, decoded) => {
    if (err) {
      res.send(404)
    } else {
      User.findById(decoded.user.id, function(err, user) {
        if (err) {
          res.send(401)
        } else {
          res.send(user.cart)
        }
      })
    }
  })
})

// REMOVE item from cart
router.delete('/:name', (res, req) => {
  var info = req.header.authorization.split(' ')
  var token = info[1]

  if (!req.params.name) {
    res.send(500)
  }

  jwt.verify(token, 'shhhhh', (err, decoded) => {
    if (err) {
      res.send(404)
    } else {
      User.find({ name: decoded.user.name }, (err, user) => {
        var index = user.cart.indexOf(req.params.name)
        if (index !== -1) {
          user.cart.splice(index, 1)
          user.save(err => {
            if (err) {
              res.send(404)
            } else {
              res.send(202)
            }
          })
        }
      })
    }
  })
})

// POST new item to cart
router.post('/', function(req, res) {
  var info = req.header.authorization.split(' ')
  var token = info[1]

  jwt.verify(token, 'shhhhh', (err, decoded) => {
    if (err) {
      res.send(404)
    } else {
      User.findById(decoded.user.id, function(err, user) {
        if (err) {
          res.send(401)
        } else {
          user.cart.push(req.body.item)
          user.save(err => {
            if (err) {
              res.send(404)
            } else {
              res.send(202)
            }
          })
        }
      })
    }
  })
})

module.exports = router
