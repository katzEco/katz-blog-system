const bodyParser = require("body-parser")

function Middleware(app, exp) {
  app.use(exp.static('static'))
  app.use(bodyParser.json())
}

module.exports = Middleware