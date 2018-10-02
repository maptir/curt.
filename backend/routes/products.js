var express = require('express')
var router = express.Router()

// Bring in Product Models
let Product = require('../models/product')

// GET all products
router.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.send(404)
    } else {
      res.send(products)
    }
  })
})

// POST new products to the database
router.post('/', (req, res) => {
  const name = req.body.name
  const base = req.body.base
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const brand = req.body.brand
  const size = req.body.size
  const quantity = req.body.quantity
  const owner = req.body.email

  req.checkBody('name', 'Name is required').notEmpty()
  req.checkBody('base', 'Base is required').notEmpty()
  req.checkBody('imageUrl', 'Image URL is required').notEmpty()
  req.checkBody('price', 'Price is required').notEmpty()
  req.checkBody('brand', 'Brand is required').notEmpty()
  req.checkBody('size', 'Size is required').notEmpty()
  req.checkBody('quantity', 'Quantity is required').notEmpty()
  req.checkBody('owner', 'Email is required').notEmpty()

  let errors = req.validationErrors()

  if (errors) {
    res.render('register', {
      errors: errors,
    })
  } else {
    let newProduct = new Product({
      name: name,
      base: base,
      owner: owner,
      imageUrl: imageUrl,
      price: price,
      brand: brand,
      size: size,
      quantity: quantity,
    })

    newProduct.save(err => {
      if (err) {
        res.send(400)
      } else {
        res.send(201)
      }
    })
  }
})

// GET all products with the given name
router.get('/:name', (req, res) => {
  Product.find({ name: req.params.name }, (err, products) => {
    if (err) {
      res.send(204)
    } else {
      res.send(products)
    }
  })
})

module.exports = router
