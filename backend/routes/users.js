const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const isAuthenticated = require('../middlewares/isAuthenticated')

// Bring in User Models
let User = require('../models/user')

// Register Form
router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/verify', isAuthenticated, (req, res) => {
  res.send({ success: true })
})

// Registration Process
router.post('/register', (req, res) => {
  req.checkBody('firstName', 'First name is required').notEmpty()
  req.checkBody('lastName', 'Last name is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'Email is required').isEmail()
  // req.checkBody('facebookId', 'Facebook ID is required').notEmpty()
  req.checkBody('password', 'Password is required').notEmpty()
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password)

  let errors = req.validationErrors()

  if (errors) {
    return res.send(errors)
  } else {
    let { firstName, lastName, email, facebookId, password } = req.body
    let newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      facebookId: facebookId,
      cart: [],
      purchasedHistory: [],
      password: password,
    })

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          res.send(err)
        }
        newUser.password = hash
        newUser.save(err => {
          if (err) {
            res.sendStatus(400)
          } else {
            res.status(201).send({ success: true })
          }
        })
      })
    })
  }
})

// Login Process
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      res.send(jwt.sign('fail', 'shhhhh'))
    } else if (user) {
      let token = jwt.sign({ id: user.toJSON()._id }, 'shhhhh')
      res.send(token)
    } else {
      res.send('Incorrect username or password')
    }
  })(req, res, next)
})

// Logout
router.get('/logout', (req, res) => {
  req.logout()
})

router.post('/clearAll', (req, res) => {
  User.remove({}, err => {
    if (err) res.send(err)
    else res.send(200)
  })
})

module.exports = router
