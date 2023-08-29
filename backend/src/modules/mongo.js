const mongoose = require('mongoose')

require('dotenv').config()
const env = process.env

const URI = `mongodb://${env.mongo_user}:${env.mongo_pass}@${env.mongo_ip}/${env.mongo_db}?authSource=${env.mongo_auth}`

mongoose.connect(URI)

let db = mongoose.connection

db.on('error', (error) => {
  console.log(error)
})

db.once('connected', () => {
  console.log('Database Connected');
})