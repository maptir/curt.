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
router.post('/add', (req, res) => {
  req.checkBody('name', 'Name is required').notEmpty()
  req.checkBody('slug', 'slug is required').notEmpty()
  req.checkBody('thumbnails', 'Thumbnails is required')
  req.checkBody('price', 'Price is required').notEmpty()
  req.checkBody('brand', 'Brand is required').notEmpty()
  req.checkBody('gender', 'Gender is required').notEmpty()
  req.checkBody('size', 'Size is required').notEmpty()

  let errors = req.validationErrors()

  if (errors) return res.send(errors)

  let { name, slug, base, thumbnails, price, brand, gender, size } = req.body
  const addedProduct = {
    name,
    slug,
    base,
    thumbnails,
    price,
    brand,
    gender,
    size,
  }
  Product.findOne(addedProduct, (err, product) => {
    if (err) {
      return res.sendStatus(404)
    }
    if (product) {
      product.updateOne({ quantity: product.quantity + 1 }, err => {
        if (err) return res.sendStatus(404)
      })
      console.log(product)
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

// EDIT products with given name
router.post('/update/:id', (req, res) => {
  let {
    name,
    slug,
    base,
    thumbnails,
    price,
    brand,
    gender,
    size,
    quantity,
  } = req.body
  const edittedProduct = {
    name,
    slug,
    base,
    thumbnails,
    price,
    brand,
    gender,
    size,
    quantity,
  }

  let query = { _id: req.params.id }

  Product.update(query, edittedProduct, err => {
    if (err) res.send(err)
    else res.send(201)
  })
})

// Remove given product
router.post('/remove/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err)
    else res.send(200)
  })
})

// GET all products with the given name
router.get('/:slug', (req, res) => {
  Product.find({ slug: req.params.slug }, (err, product) => {
    if (err) {
      res.sendStatus(204)
    } else {
      res.send(product)
    }
  })
})

router.post('/clearAll', (req, res) => {
  Product.remove({}, err => {
    if (err) res.send(err)
    else res.send(200)
  })
})

module.exports = router
