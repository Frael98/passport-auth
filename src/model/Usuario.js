const mongoose = require('mongoose')
const { Schema } = mongoose;

const Usuario = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('Usuario', Usuario)