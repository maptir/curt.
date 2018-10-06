var express = require('express')
var router = express.Router()

// Bring in Product Models
let Product = require('../models/product')

// GET all products
router.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(products)
    }
  })
})

// POST new products to the database
// Does it need to contain user for editting purpose
router.post('/add', (req, res) => {
  req.checkBody('name', 'Name is required').notEmpty()
  req.checkBody('imageUrl', 'Image URL is required').notEmpty()
  req.checkBody('price', 'Price is required').notEmpty()
  req.checkBody('brand', 'Brand is required').notEmpty()
  req.checkBody('size', 'Size is required').notEmpty()

  let errors = req.validationErrors()

  if (errors) return res.send(errors)

  let { name, base, imageUrl, price, brand, size } = req.body
  const addedProduct = { name, base, imageUrl, price, brand, size }
  Product.findOne(addedProduct, (err, product) => {
    if (err) {
      return res.sendStatus(404)
    }
    if (product) {
      product.updateOne({ quantity: product.quantity + 1 }, err => {
        if (err) return res.sendStatus(404)
      })
      res.sendStatus(201)
    } else {
      let newProduct = new Product({ ...addedProduct, quantity: 1 })
      newProduct.save(err => {
        if (err) {
          res.sendStatus(400)
        } else {
          res.sendStatus(201)
        }
      })
    }
  })
})

// GET all products with the given name
router.get('/:name', (req, res) => {
  Product.find({ name: req.params.name }, (err, products) => {
    if (err) {
      res.sendStatus(204)
    } else {
      res.send(products)
    }
  })
})

module.exports = router
