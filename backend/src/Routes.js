async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send('server spawned')
  })
}

module.exports = Routes