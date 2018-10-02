var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router()

// Bring in User Models
let User = require('../models/user')

router.get('/', function(req, res) {
  jwt.verify(req.body.token, 'shhhhh', (err, decoded) => {
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

router.post('/', function(req, res) {
  jwt.verify(req.body.token, 'shhhhh', (err, decoded) => {
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
