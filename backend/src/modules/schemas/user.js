const mongoose = require('mongoose')

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  joinedDate: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', user)