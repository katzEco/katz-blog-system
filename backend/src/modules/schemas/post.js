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
  lastUpdate: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isPublish: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('posts', post)