const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// Bring in User Models
let User = require('../models/user')

// Register Form
router.get('/register', function(req, res) {
  res.render('register')
})

// Registration Process
router.post('/register', function(req, res) {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const facebookId = req.body.facebookId
  const password = req.body.password
  const password2 = req.body.password2

  req.checkBody('firstName', 'First name is required').notEmpty()
  req.checkBody('lastName', 'Last name is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'Email is required').isEmail()
  req.checkBody('facebookId', 'Facebook ID is required').notEmpty()
  req.checkBody('password', 'Password is required').notEmpty()
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password)

  let errors = req.validationErrors()

  if (errors) {
    res.send(400)
  } else {
    let newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      facebookId: facebookId,
      cart: [],
      purchasedHistory: [],
      password: password,
    })

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) {
          console.log(err)
        }
        newUser.password = hash

        // Check if user already exist
        User.find({ email: newUser.email }, (err, user) => {
          if (user.length) {
            res.send(409)
          } else {
            newUser.save(function(err) {
              if (err) {
                res.send(400)
              } else {
                res.send(201)
              }
            })
          }
        })
      })
    })
  }
})

// Login Process
router.post('/login', function(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.send(jwt.sign('fail', 'shhhhh'))
    } else if (!user) {
      let token = jwt.sign(user, 'shhhhh')
      res.send(token)
    }
  })(req, res, next)
})

// Logout
router.get('/logout', function(req, res) {
  req.logout()
})

module.exports = router
