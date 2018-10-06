var express = require('express')
var router = express.Router()

// Bring Image model
let Image = require('../models/image')

// GET all images
router.get('/', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(images)
    }
  })
})

// GET image by name
router.get('/:name', (req, res) => {
  Image.find({ name: req.params.name }, (err, image) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(image)
    }
  })
})

// POST images to database
router.post('/', (req, res) => {
  req.checkBody('name', 'Name is required').notEmpty()
  req.checkBody('imageUrl', 'Image url is required').notEmpty()

  let errors = req.validationErrors()

  if (errors) {
    return res.send(errors)
  } else {
    let { name, imageUrl } = req.body
    let newImage = new Image({
      name: name,
      imageUrl: imageUrl,
    })

    newImage.save(err => {
      if (err) {
        res.sendStatus(400)
      } else {
        res.sendStatus(201)
      }
    })
  }
})

module.exports = router
