const mongoose = require('mongoose')

// Image Schema
const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Image', ImageSchema)
