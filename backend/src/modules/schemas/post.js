const mongoose = require('mongoose')

const post = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('posts', post)