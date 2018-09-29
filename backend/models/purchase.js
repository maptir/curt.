const mongoose = require('mongoose')

// Purchase Schema
const PurchaseSchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
})

const Purchase = module.exports = mongoose.model('Purchase', PurchaseSchema)