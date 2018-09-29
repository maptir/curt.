const mongoose = require('mongoose')

// Shoe Schema
const ShoeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    base: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Shoe = module.exports = mongoose.model('Shoe', ShoeSchema)