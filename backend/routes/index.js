var express = require('express')
var jwt = require('jsonwebtoken')
var mongoose = require('mongoose')
var router = express.Router()

// Bring in User Models
let User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/reset', (req, res, next) => {
  mongoose.connection.db.dropDatabase()
  res.send({ success: true })
})

module.exports = router
