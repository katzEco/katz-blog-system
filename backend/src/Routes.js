const FeedResp = require('./modules/functions/feed_post')
const PostRoutes = require('./routes/post')
const UserRoutes = require('./routes/user')

async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send('server spawned')
  })

  app.get('/rss', async (req, res) => {
    res.setHeader('content-type', 'application/rss+xml')
    res.send(await FeedResp())
  }) 

  await PostRoutes(app)
  await UserRoutes(app)
}

module.exports = Routes
