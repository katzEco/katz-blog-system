const exp = require('express')
const Routes = require('./src/Routes')
const Serve = require('./src/Serve')

const app = exp()

Routes(app, __dirname)
Serve(app)