const bodyParser = require('body-parser')

function Middleware(app, exp) {
  app.use(bodyParser.urlencoded())
  app.use(bodyParser.json())

  app.use(exp.static('static'))
}

module.exports = Middleware
