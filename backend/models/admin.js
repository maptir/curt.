const mongoose = require('mongoose')

// Admin Schema
const AdminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Admin', AdminSchema)
