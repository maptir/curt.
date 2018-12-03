const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
  purchasedList: [
    {
      productID: {
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
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Order', ordersSchema)
