const mongoose = require('mongoose')

// User Schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  facebookId: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
  purchasedHistory: {
    type: Array,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = (module.exports = mongoose.model('User', UserSchema))
