var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router()

// Bring in User Models
let User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
