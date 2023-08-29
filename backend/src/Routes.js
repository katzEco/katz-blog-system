const NewPost = require('./modules/functions/new_post')

const NewUser = require('./modules/functions/new_user')

async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send('server spawned')
  })

  app.post('/be/new_post', async (req, res) => {
    const contentInp = {
      title: req.body.title,
      tags: req.body.tags,
      date: new Date().getTime(),
      content: req.body.contents,
      author: req.body.author_name,
      publish: req.body.publish
    }

    res.json(await NewPost(contentInp))
  })

  app.post('/be/new_user', async (req, res) => {
    const userInp = {
      username: req.body.username,
      name: req.body.name,
    }

    res.json(await NewUser(userInp))
  })
}

module.exports = Routes
