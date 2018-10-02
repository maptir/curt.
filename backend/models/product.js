const mongoose = require('mongoose')

// Product Schema
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  base: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Product', ProductSchema)
