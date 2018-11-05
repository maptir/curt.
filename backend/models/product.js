const mongoose = require('mongoose')

// Product Schema
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  base: {
    type: String,
    required: false,
  },
  thumbnails: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  gender: {
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
  thumbnails: [{ type: String }],
})

module.exports = mongoose.model('Product', ProductSchema)
