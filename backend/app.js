const exp = require('express')
const Routes = require('./src/Routes')
const Serve = require('./src/Serve')
const Middleware = require('./src/Middleware')

const app = exp()

require('./src/modules/mongo')

Middleware(app, exp)
Routes(app, __dirname)
Serve(app)