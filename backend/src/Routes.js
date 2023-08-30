const PostRoutes = require('./routes/post')
const UserRoutes = require('./routes/user')

async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send('server spawned')
  })

  

  app.get('/rss', async (req, res) => {
    res.send('rss spawned')
  })

  await PostRoutes(app)
  await UserRoutes(app)
}

module.exports = Routes
