const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
  purchasedList: [
    {
      productId: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  dateTime: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Order', ordersSchema)
